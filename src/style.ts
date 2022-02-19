import { css } from "@emotion/css";


export const good = css`& { background-color: rgba(38, 255, 0, 0.068); }`
export const neutral = css`& { background-color: rgba(255, 221, 0, 0.068); }`
export const bad = css`& { background-color: rgba(255, 0, 0, 0.068); }`

export const term = css`
    & {
        text-decoration: underline dashed;
    }
    &::after {
        content: "[?]";
    }
    &:hover {
        background-color: rgba(255, 221, 0, 0.068);
    }
`;