import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import pluginRewriteAll from "vite-plugin-rewrite-all";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
    pluginRewriteAll(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
