import { BigNumber } from "ethers";
import { css, cx } from "@emotion/css";
import { useFlashes } from "./react-utils/useFlashes";
import { CopySpan } from "./react-utils/CopySpan";

const _css = css`
    & .hex-prefix { 
        color: rgb(184, 184, 184)
    }

    &.colored .score-fs {
        background-color: rgba(0, 157, 255, 0.100)
    }

    &.colored .score-first-non-fs {
        background-color: rgba(0, 255, 174, 0.100)
    }
`

export function Score({
    score, full = false, colored = false,
}: {
    score: BigNumber;
    full?: boolean;
    colored?: boolean;
}) {
    const hex = "0x" + score.toHexString().substring(2).padStart(64, "0");
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [, fs, firstNonFs, rest] = hex.match(/0x(f*)(..)(.*)/)!;
    const fCount = fs.length;
    const fCountStr = fCount.toString(16).padStart(2, "0");
    return <span className={cx("Score", _css, { colored }, useFlashes([hex]))}>
        <CopySpan data={hex}>
            <span className="hex-prefix">0x</span>
            {full
                ? <>
                    <span className={cx("score-fs")}>{fs}</span>
                    <span className={cx("score-first-non-fs")}>{firstNonFs}</span>
                    {rest}
                </>
                : <>
                    [<span className={cx("score-fs")}>{fCountStr}</span>]
                    <span className={cx("score-first-non-fs")}>{firstNonFs}</span>
                    …
                </>}
        </CopySpan>
    </span>;
}
