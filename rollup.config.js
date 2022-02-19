import _ from "lodash";
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import injectProcessEnv from 'rollup-plugin-inject-process-env';
import { imports } from "./importmap.json";

const isDev = true;

export default {
    input: './src/index.tsx',
    output: {
        file: `index.bundle.js`,
        format: 'esm',
        sourcemap: isDev && "inline",
    },
    external: Object.keys(imports),
    plugins: [
        resolve({
            preferBuiltins: false,
            browser: true,
        }),
        commonjs(),
        json(),
        typescript(isDev && {
            useDefineForClassFields: false,
            target: "ESNext",
        }),
        !isDev && terser(),
        injectProcessEnv(),
    ],
}