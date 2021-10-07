import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import remove from "rollup-plugin-delete";
import {resolve} from "path";
import {terser} from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
    input: "src/Http.ts",
    plugins: [
        remove({targets: resolve("lib", "*")}),
        typescript(),
        commonjs(),
        nodeResolve(),
        babel({
            babelHelpers: "bundled",
            babelrc: false,
            presets: [
                "@babel/preset-env",
                "@babel/preset-typescript"
            ]
        }),
        terser()
    ],
    output: [
        {
            file: resolve("lib", "Http.common.js"),
            format: "cjs",
            sourcemap: true
        },
        {
            file: resolve("lib", "Http.module.js"),
            format: "esm",
            sourcemap: true
        },
        {
            file: resolve("lib", "Http.browser.js"),
            format: "iife",
            sourcemap: true,
            name: "Http"
        }
    ]
};
