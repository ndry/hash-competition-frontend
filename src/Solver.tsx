import * as rx from "rxjs";
import { useRxSubscribe } from "./react-utils/useRxSubscribe";
import { usePromise } from "./react-utils/usePromise";
import { def, eqByStringify } from "./utils";
import { BigNumber, BytesLike, ethers } from "ethers";
import { BackgroundSolver } from "./BackgroundSolver";
import { hexdotify, xor } from "./eth-utils";
import { Hex } from "./Hex";
import { Score } from "./Score";
import { Waiting } from "./react-utils/Waiting";
import { block$ } from "./provider";
import { HashCompetition } from "@xplart/hash-competition-onchain/typechain-types/HashCompetition";
const { hexlify, keccak256 } = ethers.utils;

export function Solver({
    hashCompetition, backgroundSolver, contractAddress, onClaim,
}: {
    hashCompetition: HashCompetition,
    backgroundSolver: BackgroundSolver,
    contractAddress: BytesLike,
    onClaim: (task: BytesLike, solution: BytesLike, score: BigNumber) => void;
}) {
    const newestBlockNumber = useRxSubscribe(() => block$, []);
    const bestSolution = useRxSubscribe(() => backgroundSolver.solution$.pipe(
        rx.scan((acc, value) => {
            if (acc.task !== value.task) {
                return value;
            }
            if (acc.score.lt(value.score)) {
                return value;
            }
            return acc;
        }),
        rx.distinctUntilChanged(eqByStringify())
    ), [backgroundSolver]);
    const lastSolution = useRxSubscribe(() => backgroundSolver.solution$, [backgroundSolver]);
    if (!bestSolution || !lastSolution) { return null; }
    const publicTask = usePromise(
        async () => (await hashCompetition.activeTasks(lastSolution.task)),
        [newestBlockNumber, hexlify(lastSolution.task)]);
    const publicScore = publicTask?.score;
    const canClaim = def(publicScore) && def(bestSolution) && bestSolution.score.gt(publicScore);
    const claim = () => onClaim(bestSolution.task, bestSolution.solution, bestSolution.score);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const scoreFCount = bestSolution.score._hex.match(/0xf*/)![0].length - 2;
    return <div>
        <h2>Solver</h2>
        <div>
            Solving task <Hex bytes={bestSolution.task} transform={hexdotify} /><Waiting />
            &#x20;| Last solution: <Hex bytes={lastSolution.solution} transform={hexdotify} /><br />
            <br />
            Best solution so far: <Hex bytes={bestSolution.solution} transform={hexdotify} /><br />
            {"Goal:".padStart(10, "·")}
            &#x20;<Hex bytes={xor(bestSolution.task, keccak256(contractAddress))} /><br />
            {"Sol hash:".padStart(10, "·")}
            &#x20;<Hex bytes={(keccak256(bestSolution.solution))} /><br />
            {"".padStart(10, "·")}···{"".padStart(scoreFCount, "⇓")}<br />
            {"Sol score:".padStart(10, "·")}
            &#x20;<Score score={bestSolution.score} full colored /><br />
            Sol score <Score score={bestSolution.score} colored /> is {
                !def(publicScore)
                    ? <Waiting />
                    : <>{(publicScore.lt(bestSolution.score)
                        ? <><span className="good">better</span> than</>
                        : (publicScore.eq(bestSolution.score)
                            ? <><span className="neutral">same</span> as</>
                            : <><span className="bad">worse</span> than</>))
                    } pub score <Score score={publicScore} /></>
            }<br />
            &#x20;<button disabled={!canClaim} onClick={claim}>Claim</button>
        </div>
    </div>;
}
