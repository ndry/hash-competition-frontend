import _ from "lodash";
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import injectProcessEnv from 'rollup-plugin-inject-process-env';
import { packages } from "./package-lock.json";


const isDev = process.env.NODE_ENV.trim() !== 'production';
const importmap = (() => {
    const version = (name) => packages["node_modules/" + name].version;
    const nameAtVesrion = name => /.@/.test(name) ? name : `${name}@${version(name)}`;
    const unpkg = path => name => `https://unpkg.com/${nameAtVesrion(name)}/${path}`;
    const esmBundle = path => name => `https://unpkg.com/@esm-bundle/${nameAtVesrion(name)}/${path}`;
    const min = isDev ? "" : ".min";
    return {
        "imports": _.mapValues({
            "lodash": esmBundle(`esm/index.js`),
            "rxjs": esmBundle(`esm/es2015/rxjs.min.js`),
            "preact": unpkg(`dist/preact.mjs`),
            "preact/hooks": unpkg(`hooks/dist/hooks.mjs`)("preact"),
            "@emotion/css": esmBundle(`esm/emotion${min}.js`)("emotion@10.0.27"),
            "ethers": unpkg(`dist/ethers.esm${min}.js`),
        }, (link, name) => _.isFunction(link) ? link(name) : link),
    }
})();

const indexHtml = (bundle) => {
    const importmapStr = JSON.stringify(importmap, undefined, isDev ? "    " : undefined);
    const modulePreloadStr = Object.values(importmap.imports)
        .map(link => /*html*/`<link rel="modulepreload" href="${link}"/>`)
        .join("\n");
    return /*html*/`<!DOCTYPE html>
<html lang="en"><head><title>HashCompetition</title></head><body>
    <script type="importmap">${importmapStr}</script>
    <script src="https://unpkg.com/es-module-shims@0.12.8/dist/es-module-shims.min.js"></script>
    ${modulePreloadStr}
    <script type="module">${bundle}</script>
</body></html>`;
}

const bundleName = `index.bundle.js`;
export default {
    input: './src/index.tsx',
    output: {
        file: bundleName,
        format: 'esm',
        sourcemap: isDev && "inline",
    },
    external: Object.keys(importmap.imports),
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
        injectProcessEnv(),
        !isDev && terser(),
        {
            generateBundle(outputOptions, bundleInfo) {
                this.emitFile({
                    type: 'asset',
                    fileName: "index.html",
                    source: indexHtml(bundleInfo[bundleName].code),
                });
                delete bundleInfo[bundleName];
            }
        }
    ],
}