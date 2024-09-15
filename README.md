# README

This repository contains an example project used to tackle the problems 
encountered with introducing the latest version of AGL (version 4.0.1) 
into Freon (version 0.7.0-beta).

This project is a monorepro containing two packages, one with the Freon core package, and one with the 
example that uses Freon core and AGL.

To get the project going, use the command `npm install`, followed by `npm run build`, in the root.

The code that depends on AGL resides in the folder `packages/Calculator/src/reader/gen`. The file 
`packages/Calculator/src/__tests__/ParserTest.test.ts` contains a vitest based test, which should 
run without any problems (command line, either in root or in `packages/Calculator/`: `npm run test`).

To show the problems I ran into when updating to a new version of AGL I made 3 branches. Note that 
when you change from one branch to another, you need to delete `package-lock.json` in the root of 
the project and run `npm install` again in order to get the right version of the packages that we rely on.

1. The `master` branch contains the base-line. It still uses AGL version 4.0.0-rc.5. In this branch the test
   works (should work!).
2. The `using-new-agl-1` branch contains almost the same code. These are the changes:
   * package.json: version number of AGL is now 4.0.1,
   * node-modules/net.akehurst.language-agl-processor/package.json: the main entry is to an .mjs file 
   instead of a .js file,
   * reader/*: all imports of AGL are changed.
3. The `using-new-agl-2` branch has a folder `src/new-reader`, which contains a number of trials. I would like to 
   use a visitor over the sppt to generate the ASM that can be used by the rest of the code in this project.
