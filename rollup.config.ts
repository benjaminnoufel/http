import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import remove from "rollup-plugin-delete";
import {resolve} from "path";
import {terser} from "rollup-plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
    input: resolve("src", "Http.ts"),
    plugins: [
        remove({targets: resolve("lib", "*")}),
        typescript(),
	commonjs(),
	nodeResolve(),
        terser()
    ],
    output: {
        file: resolve("lib", "Http.js"),
        format: "cjs"
    }
};
