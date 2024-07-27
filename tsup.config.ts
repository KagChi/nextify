import { defineConfig } from "tsup";
import type { Options } from "tsup";
import { dependencies } from "./package.json";

const baseOptions: Options = {
    clean: true,
    dts: true,
    entry: ["src/index.tsx"],
    minify: false,
    external: Object.keys(dependencies),
    sourcemap: true,
    target: "es2022",
    tsconfig: "./tsconfig.json",
    keepNames: true,
    banner: {
        js: '"use client";'
    }
};

export default [
    defineConfig({
        ...baseOptions,
        format: "esm",
        outExtension: () => ({ js: ".js" })
    })
];
