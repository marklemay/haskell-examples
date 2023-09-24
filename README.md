Browser to Haskell Wasm Reactor Module Communication Example
============================================================

## Setup Using Nix

```
nix shell https://gitlab.haskell.org/ghc/ghc-wasm-meta/-/archive/master/ghc-wasm-meta-master.tar.gz
```

Read more about GHC Wasm: https://gitlab.haskell.org/ghc/ghc-wasm-meta.

## Run the Demo

in hacky state, moving all build to CI and should uncheck in dependencies

* down load the zip from CI that contains the haskell generated webasm

install all the node dependencies (what's the init cmd for this)

`npm start`

and run server with

`node_modules/.bin/http-server`