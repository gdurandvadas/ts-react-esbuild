const esbuild = require("esbuild");

esbuild
  .context({
    entryPoints: ["src/index.tsx"],
    bundle: true,
    minify: true,
    outfile: "../server/public/client/bundle.js",
  })
  .then((ctx) => {
    ctx.watch().catch((err) => console.error(err));
  })
  .catch((err) => console.error(err));
