const esbuild = require("esbuild");

const development = process.argv.includes("--dev");

if (development) {
  esbuild
    .context({
      entryPoints: ["src/index.tsx"],
      bundle: true,
      minify: false,
      outfile: "../server/public/client/bundle.js",
    })
    .then((ctx) => {
      ctx.watch().catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
} else {
  esbuild
    .build({
      entryPoints: ["src/index.tsx"],
      bundle: true,
      minify: true,
      treeShaking: true,
      outfile: "../server/public/client/bundle.js",
    })
    .catch((err) => console.error(err));
}
