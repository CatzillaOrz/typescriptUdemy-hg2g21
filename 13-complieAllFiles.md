```bash
# run
tsc --init

```

```json

{
  "exclude":[
    "**/*.dev.ts",
    "node_modules" // would be the default
  ],
  "include": [
    "app.ts"
  ],
  "files":[


  ],

  "compilerOptions":{
    "target":"es6",
    "modele":"commonjs",
    "lib": [
      // "dom",          // default
      // "es6",          // default
      // "dom.iterable", // default
      // "scripthost"    // default
    ],


    "allowJs": true,      /* Allow javascript files to be compiled. */
    "checkJs": true,      /* report errors in .js files */
    "jsx": true,          /* Specify JSX code generaton: */
    "declaration": true,    /* Generates corresponding '.d.ts' file */
    "declarationMap": true,    /* Generates a sourcemap for each corresponding '.d.ts' file */
    "sourceMap": true,    /* Generates corresponding '.map' file */

    "outDir": "./dist",   /* Redirect output structure to the dir folder */
    "rootDir": "./src",    /* Specify the root directory of input files. Use to  control the output directory structure with --outDir*/
    "outFile": "./",  /* Concatenate and emit output to single file */

    "removeComments": true, /* Do not emit comments to output. */
    "onEmit": true, /* Do not emit outputs. */
    "downlevelIteration": true, /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    "noEmitOnError": true, /* If has error in .ts files it will stop compile */

    /* strict Type-check options */
    "strict": true,   /* Enable  all strict type-checking options bellow */
    "noImpliciAay": true,   /* Enable  */
    "strictNullChecks": true,   /* Enable  */
    "strictBindCallApply": true,   /* Enable  */
    "strictPropertyInitaialication": true,   /* Enable  */
    "noImplicitThis": true,   /* Enable  */
    "alwaysStrict": true,   /* Enable  */

    /* code quality | Additional Checks */
    "noUnusedLocals": true,   /* Report errors */
    "noUnusedParameters": true,   /* Report errors */
    "noImplicitReturns": true,   /* Report errors */
    "noFallthroughCasesInSwitch": true,   /* Report errors */

    /* Module Resolution Options */
    "moduleResolution": "node",   /* Specify module resolution strategy */
    "baseUrl": "./",    /* Base directory to resolve non-absolution... */
    "paths": "{}",      /* A series of entries which re-map... */
    "rootDirs": "[]",   /* List of root folders whose combined... */
    "typeRoots": "[]",    /* List of folders to include type def... */
    "types": [],    /* Type declaretion files to be included... */
    "allowSyntheticDefaultImports": true,    /* Allow default imports from modules... */
    "esModuleInterop": true,    /* Enable emit interoperability between... */
    "preserveSymlinks": true,   /* Do not resolve the real path of sym... */

    /* Source Map Options */
    "sourceRoot":"",    /* Specify the location where debugger.. */
    "mapRoot":"",   /* Specify the location where debugger.. */
    "inlineSourceMap":true,   /* Emit a single file with source maps... */
    "inlineSources":true,   /* Emit the source alongside the source... */

    /* Experimental Options */
    "emitDecoratorMetadata":true,   /* Enables experimental support for em.. */


  }
}

```
