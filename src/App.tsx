import _ from "lodash";
import * as rx from "rxjs";
import { useEffect, useState } from "preact/hooks";
import update from 'immutability-helper';
import { ethers } from "ethers";
import { HashCompetition } from "@xplart/pow-onchain/typechain-types/HashCompetition";
import { Task } from "./Task";

const provider = new ethers.providers.JsonRpcProvider();
const signer = provider.getSigner();

const getBlocksBeforeInclusive = (blocknumber: number, count: number) => Promise.all(Array.from(
    { length: Math.min(blocknumber + 1, count) },
    (_, i) => provider.getBlock(blocknumber - i)));

type TaskState = {
    block: ethers.providers.Block;
    isPinned: boolean;
};

export function App() {
    const [state, setState] = useState(undefined as Record<string, TaskState> | undefined);

    useEffect(() => {
        const subscription = (rx.fromEvent(provider, "block") as rx.Observable<number>).pipe(
            rx.switchMap((blocknumber: number) => getBlocksBeforeInclusive(blocknumber, 10))
        ).subscribe((blocks) => {

            setState((state) => {
                if (!state) {
                    return _.fromPairs(blocks.map(block => ([block.hash, {
                        block,
                        isPinned: false,
                    }])));
                }

                const newBlocks = blocks.filter(block => !state[block.hash]);
                return update(state, _.fromPairs(newBlocks.map(block => ([block.hash, {
                    $set: {
                        block,
                        isPinned: false,
                    }
                }]))));
            });
        });
        return () => subscription.unsubscribe();
    }, []);

    if (!state) { return <div>"Loading..."</div>; }

    const setIsPinned = (taskHash: string, isPinned: boolean) => 
        setState(tasks => update(tasks, { [taskHash]: { isPinned: { $set: isPinned } } }));

    const sortedTasks = _(state).values().sortBy(t => -t.block.number).value();
    return <div>
        <h1>Hello world!</h1>
        {sortedTasks.map(task => <Task
            key={task.block.hash}
            {...task}
            lastBlockNumber={sortedTasks[0].block.number}
            onPin={(isPinned) => setIsPinned(task.block.hash, isPinned)}
        />)}
    </div>;
}