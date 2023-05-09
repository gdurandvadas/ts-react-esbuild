const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    treeShaking: true,
    platform: 'node',
    outfile: 'index.js'
  })
  .catch((err) => console.error(err));
