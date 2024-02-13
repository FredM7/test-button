import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import dts from "rollup-plugin-dts";

// const packageJson = require("./package.json");

export default [
  {
    input: "./src/index.ts",
    output: [
      // {
      //   file: packageJson.main,
      //   format: "cjs",
      //   sourcemap: true,
      //   // exports: "named",
      // },
      {
        file: "dist/index.js",
        format: "esm",
        sourcemap: true,
        // exports: "named",
      },
    ],
    plugins: [
      peerDepsExternal({
        includeDependencies: true,
      }),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".scss"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
      }),
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        sourceMap: true,
      }),
    ],
  },
];
