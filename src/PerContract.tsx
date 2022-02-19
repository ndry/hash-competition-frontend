import _ from "lodash";
import { useMemo, useState } from "preact/hooks";
import update from 'immutability-helper';
import { useRxSubscribe } from "./react-utils/useRxSubscribe";
import { usePromise } from "./react-utils/usePromise";
import { BigNumber, BytesLike, ethers } from "ethers";
import { BackgroundSolver } from "./BackgroundSolver";
import { Task } from "./Task";
import { block$, provider, createHashCompetitionContract } from "./provider";
import { Solver } from "./Solver";
import { Waiting } from "./react-utils/Waiting";
import { Solution } from "./Solution";
const { hexlify } = ethers.utils;

const backgroundSolver = new BackgroundSolver();

export function PerContract({ contractAddress }: { contractAddress: string; }) {
    const hashCompetition = useMemo(
        () => createHashCompetitionContract(contractAddress, provider.getSigner()),
        [contractAddress]);

    const [selectedTask, setSelectedTask] = useState<BytesLike>();
    const newestBlockNumber = useRxSubscribe(() => block$, []);
    const [claims, setClaims] = useState<Record<string, {
        task: BytesLike;
        solution: BytesLike;
        score: BigNumber;
    }>>({});
    const BLOCKS_TO_CREATE_TASK = usePromise(() => hashCompetition.BLOCKS_TO_CREATE_TASK(), []);

    if (_.isUndefined(BLOCKS_TO_CREATE_TASK) || _.isUndefined(newestBlockNumber)) {
        return <div>Lodaing<Waiting /></div>;
    }

    const solve = (taskHash: BytesLike) => {
        backgroundSolver.setTask(contractAddress, taskHash);
        setSelectedTask(taskHash);
    };
    const claim = (task: BytesLike, solution: BytesLike, score: BigNumber) => setClaims(claims => update(claims, {
        [hexlify(task) + hexlify(solution)]: { $set: { task, solution, score } }
    }));

    return <div>
        <h1>HashCompetition frontend</h1>

        {_.values(claims).length > 0 && <div>
            <h2>Your solutions</h2>
            {_.entries(claims).map(([key, claim]) => <Solution
                key={key}
                hashCompetition={hashCompetition}
                {...claim}
                onRemove={() => setClaims(claims => update(claims, {
                    $unset: [key]
                }))}
            />)}
        </div>}

        <Solver
            hashCompetition={hashCompetition}
            contractAddress={contractAddress}
            backgroundSolver={backgroundSolver}
            onClaim={claim} />
        <div>
            <h2>Ongoing tasks (based on last blocks)</h2>
            Select a task to solve:
            {_.range(
                newestBlockNumber,
                Math.max(0, newestBlockNumber - BLOCKS_TO_CREATE_TASK.toNumber()),
                -1
            ).map(blockNumber => <Task
                key={blockNumber}
                hashCompetition={hashCompetition}
                blockNumber={blockNumber}
                selectedHash={selectedTask}
                onSolve={solve} />)}
        </div>
    </div>;
}
