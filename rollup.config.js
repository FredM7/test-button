import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import generatePackageJson from "rollup-plugin-generate-package-json";
// import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.esm.js",
        exports: "named",
        format: "esm",
        banner: `'use client';`,
      },
      {
        file: "dist/index.cjs.js",
        exports: "named",
        format: "cjs",
        banner: `'use client';`,
      },
    ],
    external: [/node_modules/],
    plugins: [
      replace({
        preventAssignment: true,
        __IS_DEV__: process.env.NODE_ENV === "development",
      }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),

      // generatePackageJson({
      //   baseContents: {
      //     name: `test-button`,
      //     private: true,
      //     main: "./index.cjs.js",
      //     module: "./index.esm.js",
      //     types: "./index.d.ts",
      //     peerDependencies: packageJson.peerDependencies,
      //   },
      //   outputFolder: `dist`,
      // }),
    ],
  },
];
