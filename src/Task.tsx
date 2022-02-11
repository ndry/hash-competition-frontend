import _ from "lodash";
import * as rx from "rxjs";
import { useEffect, useState } from "preact/hooks";
import update, { Spec } from 'immutability-helper';
import { ethers } from "ethers";
import { scoreSolution } from "./utils";

const _scoreSolution = scoreSolution("0x0000000000000000000000000000000000000000");
const solver = (() => {
    const generateSolution = () => {
        return ethers.utils.randomBytes(32);
    };
    const stringifyCompare = function <T>(a: T, b: T) { return JSON.stringify(a) === JSON.stringify(b) };

    let task = undefined as string | undefined;
    const solution$ = new rx.Subject<{
        task: string,
        solution: string,
    }>();

    setInterval(() => {
        if (!task) { return; }
        for (let i = 0; i < 50; i++) {
            solution$.next({
                task: task,
                solution: ethers.utils.hexlify(generateSolution()),
            });
        }
    }, 50);

    return {
        setTask(_task: string) {
            task = _task;
        },
        solution$: solution$.pipe(
            rx.scan((acc, value) => {
                if (acc.task !== value.task) {
                    return value;
                }
                if (_scoreSolution(acc.task, acc.solution) < _scoreSolution(value.task, value.solution)) {
                    return value;
                }
                return acc;
            }),
            rx.distinctUntilChanged(stringifyCompare),
        ),
    }
})();

type ClaimedSolutions = {
    solution: string;
    claimStatus: "onWire" | "inPool" | "onChain" | "rejected";
    submissionStatus: "onWire" | "inPool" | "onChain" | "rejected";
};
type TaskState = {
    bestSolution?: string;
    claimedSolutions: ClaimedSolutions[];
};


export function Task({
    block,
    lastBlockNumber,
    isPinned,

    onPin,
}: {
    block: ethers.providers.Block,
    lastBlockNumber: number,
    isPinned: boolean;

    onPin: (isPinned: boolean) => void,
}) {
    const [state, setState] = useState({
        claimedSolutions: [] as ClaimedSolutions[]
    } as TaskState);
    const updateState = (spec: Spec<typeof state, never>) => 
        setState(state => update(state, spec));

        
    const relativeNumber = lastBlockNumber - block.number;
    const relativeNumberStr = relativeNumber >= 10
        ? "##"
        : relativeNumber.toString().padStart(2, "0");

    useEffect(() => {
        const subscription = solver.solution$.pipe(
            rx.filter(({ task }) => task === block.hash)
        ).subscribe(({ solution }) => {
            updateState({ bestSolution: { $set: solution } });
            onPin(true);
        });
        return () => subscription.unsubscribe();
    }, []);

    return <div style={{ border: "1px solid" }}>
        {isPinned
            ? <button onClick={() => onPin(false)}>Unpin</button>
            : <button onClick={() => onPin(true)}>Pin</button>}
        <h2 style={{ fontFamily: "Courier" }}>{relativeNumberStr}: {block.hash}</h2>
        <div>Active: {relativeNumber < 10 ? "yes" : "no"}</div>
        <button onClick={() => solver.setTask(block.hash)}>Generate solution</button>
        {state.bestSolution &&
            <div>
                <div style={{ fontFamily: "Courier" }}>
                    {state.bestSolution} - Score: {_scoreSolution(block.hash, state.bestSolution)}
                </div>
                <button>Claim solution</button>
            </div>}
        <div>
            <h3>Claims:</h3>
            <div>
                <h4>claim 1</h4>
                <button disabled>Submit solution</button>
            </div>
            <div>
                <h4>claim 2</h4>
                <button disabled>Submit solution</button>
            </div>
        </div>
        <button disabled>Claim reward</button>
    </div>;
}
