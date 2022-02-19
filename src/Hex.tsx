import { BytesLike, ethers } from "ethers";
import { CopySpan } from "./react-utils/CopySpan";
import { css, cx } from "@emotion/css";
import { useFlashes } from "./react-utils/useFlashes";
type HTMLAttributes<RefType> = import("preact").createElement.JSX.HTMLAttributes<RefType>;
const { hexlify } = ethers.utils;

const _css = css`
    & .hex-prefix { 
        color: rgb(184, 184, 184)
    }
`;

export const Hex = ({
    bytes,
    transform,
    className,
}: HTMLAttributes<HTMLSpanElement> & {
    bytes: BytesLike,
    transform?: (b: BytesLike) => string,
    children?: never,
}) => <span className={cx(className, "Hex", _css, useFlashes([hexlify(bytes)]))}>
        <CopySpan data={hexlify(bytes)}>
            <span className="hex-prefix">0x</span>{(transform ?? hexlify)(bytes).substring(2)}
        </CopySpan>
    </span>
