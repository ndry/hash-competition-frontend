// eslint-disable-next-line import/no-internal-modules
import "preact/debug";

import { render } from "preact";
import { App } from "./App";
import { css } from "@emotion/css";


export const _css = css`
    & {
        width: 750px;
        margin: auto;
    }
    & * {
        font-family: "Courier";
        font-size: 1em;
        line-height: 1.1em;
    }
    & h1::before {
        content: "# ";
    }
    & h2::before {
        content: "## ";
    }
    & h3::before {
        content: "### ";
    }
    & h1, h2, h3 {
        margin: 1em 0em 0em 0em;
        padding: 0em;
    }
    & h3 {
        font-weight: normal;
    }
    & button {
        padding: 0px;
        border: none;
    }
    & button::before {
        content: "[\\00a0\\00a0";
    }
    & button::after {
        content: "\\00a0\\00a0]";
    }
    & button.short::before {
        content: "[";
    }
    & button.short::after {
        content: "]";
    }

    & .todo {
        color: red;
    }
`;


render(<div className={_css}><App /></div>, document.body);