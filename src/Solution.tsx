import { useFlashes } from "./react-utils/useFlashes";
import { useRxSubscribe } from "./react-utils/useRxSubscribe";
import { usePromise } from "./react-utils/usePromise";
import { BytesLike, BigNumber, ethers } from "ethers";
import { Hex } from "./Hex";
import { hexdotify } from "./eth-utils";
import { Waiting } from "./react-utils/Waiting";
import { block$, provider } from "./provider";
import _ from "lodash";
import { Score } from "./Score";
import { def } from "./utils";
import { HashCompetition } from "@ndry/hash-competition-onchain/typechain-types/HashCompetition";
import * as style from "./style";
import { css, cx } from "@emotion/css";
import { Transaction, useTransaction } from "./Transaction";

const { hexlify, keccak256 } = ethers.utils;

const _css = css`
    & button.short {
        float: right
    }
`;

export function Solution({
    hashCompetition, task, solution, score, onRemove
}: {
    hashCompetition: HashCompetition
    task: BytesLike,
    solution: BytesLike,
    score: BigNumber,
    onRemove: () => void,
}) {
    const newestBlockNumber = useRxSubscribe(() => block$, []);
    const block = usePromise(() => provider.getBlock(hexlify(task)), [task]);
    const BLOCKS_TO_CREATE_TASK = usePromise(() => hashCompetition.BLOCKS_TO_CREATE_TASK(), []);

    const isOngoing =
        (!def(BLOCKS_TO_CREATE_TASK) || !def(block) || !def(newestBlockNumber))
            ? undefined
            : ((newestBlockNumber - block.number) < BLOCKS_TO_CREATE_TASK.toNumber());


    const renderedTitle = <>
        <button className="short" onClick={() =>
            confirm("Are you sure you want to remove this solution? This action is not revertible")
            && onRemove()
        }>x</button>
        <h3>
            Solution <Hex bytes={solution} transform={hexdotify} /> for
            &#x20;<span className={useFlashes([isOngoing])}>{_.isUndefined(isOngoing) ? <Waiting /> : isOngoing
                ? <span
                    className={style.term}
                    title="soultion claims and submissions are still accpeted&#013;rewards are not payed out yet"
                >ongoing</span>
                : <span
                    className={style.term}
                    title="soultion claims and submissions are no more accpeted&#013;rewards are payed out"
                >finished</span>
            }</span>
            &#x20;task <Hex bytes={task} transform={hexdotify} />
        </h3>
    </>;

    const publicTask = usePromise(
        async () => (await hashCompetition.activeTasks(task)),
        [newestBlockNumber, task]);
    const publicScore = publicTask?.score;
    const renderedScore = <>Solution score <Score score={score} /> is {
        !def(publicScore)
            ? <Waiting />
            : <><BigNumberCmp n1={score} n2={publicScore} /> public score <Score score={publicScore} /></>
    }</>

    const BET_SIZE = usePromise(() => hashCompetition.BET_SIZE(), []);
    const renderedClaim = (() => {
        if (!BET_SIZE) { return <Waiting /> }

        const [claimTxStatus, sendClaim] = useTransaction(() =>
            hashCompetition.claimSoluton(task, keccak256(solution), { value: BET_SIZE }),
            true);

        const renderedClaim = <Transaction
            title="Claim" status={claimTxStatus} onRetry={sendClaim} />;

        if (claimTxStatus?.[0] !== "confirmed") { return renderedClaim; }

        // okay, the claim is confirmed
        const [submitTxStatus, sendSubmit] = useTransaction(() =>
            hashCompetition.submitSolution(task, solution));

        const renderedSubmit = <Transaction
            title="Submission" actionTitle="Submit" status={submitTxStatus} onRetry={sendSubmit} />;

        if (submitTxStatus?.[0] !== "confirmed") {
            return <>
                {renderedClaim}
                {renderedSubmit}
            </>;
        }

        // okay, the submission is confirmed
        const [rewardClaimTxStatus, sendRewardClaim] = useTransaction(() =>
            hashCompetition.claimReward(task));

        const renderedReward = <Transaction
            title="Reward claim" actionTitle="Claim reward" status={rewardClaimTxStatus} onRetry={sendRewardClaim} />;

        return <>
            {renderedClaim}
            {renderedSubmit}
            {renderedReward}
        </>
    })();

    return <div className={cx("Solution", _css)}>
        {renderedTitle}
        {renderedScore}<br />
        {renderedClaim}
    </div>;
}

export const BigNumberCmp = ({ n1, n2 }: { n1: BigNumber, n2: BigNumber }) =>
    <>{(n2.lt(n1)
        ? <><span className={style.good}>better</span> than</>
        : (n2.eq(n1)
            ? <><span className={style.neutral}>same</span> as</>
            : <><span className={style.bad}>worse</span> than</>))}</>
