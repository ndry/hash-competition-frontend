import { useRxSubscribe } from "./react-utils/useRxSubscribe";
import { usePromise } from "./react-utils/usePromise";
import { BytesLike } from "ethers";
import { block$, provider } from "./provider";
import { HashCompetition } from "@ndry/hash-competition-onchain/typechain-types/HashCompetition";
import { Waiting } from "./react-utils/Waiting";
import { Hex } from "./Hex";
import { hexdotify } from "./eth-utils";
import { Score } from "./Score";
import { def } from "./utils";
import { css, cx } from "@emotion/css";
import * as style from "./style";

const _css = css`
    & {
        border: 1px solid;
        animation: flash0 1s;
        padding: 0.5em 0.5ch;
        margin: 1px;
    }
    &.selected {
        background-color: rgb(237, 255, 234);
    }
`;

export function Task({
    hashCompetition,
    blockNumber,
    selectedHash,
    onSolve,
}: {
    hashCompetition: HashCompetition
    blockNumber: number,
    selectedHash: BytesLike | undefined,
    onSolve: (task: BytesLike) => void,
}) {
    const block = usePromise(() => provider.getBlock(blockNumber), []);
    const newestBlockNumber = useRxSubscribe(() => block$, []);
    const bestPublicScore = usePromise(async () => {
        if (!block) { return; }
        const at = await hashCompetition.activeTasks(block.hash);
        return at.score;
    }, [block, newestBlockNumber]);

    const selected = block && (selectedHash === block.hash);

    const solveBtn = <button disabled={!block || selected} onClick={block && (() => onSolve(block.hash))}>Solve</button>;
    const hashEl = block ? <Hex bytes={block.hash} transform={hexdotify} /> : <Waiting />;
    const relativeNumberStr = (!def(newestBlockNumber) || !block)
        ? <Waiting />
        : (() => {
            const relativeNumber = newestBlockNumber - block.number;
            const relativeNumberStr = relativeNumber.toString().padStart(3, "·");
            return relativeNumberStr;
        })();

    return <div className={cx("Task", _css, { selected })}>
        <div>{solveBtn} {relativeNumberStr}: {hashEl}</div>
        <div>
            <span className={style.term} title="The score of the best solution for the given task submitted so far">
                Public score
            </span>: {!def(bestPublicScore) ? <Waiting /> : <Score score={bestPublicScore} />}
        </div>
    </div>;
}