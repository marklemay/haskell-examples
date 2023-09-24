import {nodeResolve} from "@rollup/plugin-node-resolve"
//import typescript from '@rollup/plugin-typescript' // can wasm and ts coexist?
//import { wasm } from '@rollup/plugin-wasm'; doesn't work?

//import {lezer} from "@lezer/generator/rollup"

export default {
  input: "./client.in.js",
  output: {
    file: "./client.js",
    format: "es"
  },
  plugins: [nodeResolve()] //,wasm()] //, typescript()] //,lezer()]
}