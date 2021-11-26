// import { fileURLToPath } from "url";
// import path from "path";

import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import { terser } from "rollup-plugin-terser"
import del from 'rollup-plugin-delete'

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  input: 'src/index.js',
  output: [{
    globals: {
      vue: 'Vue'
    },
    name: 'UnitsUI',
    dir: 'dist',
    // file: 'dist/index.umd.js',
    format: 'umd',
    exports: "named",
    plugins: [terser({
      ecma: 2015
    })],
    inlineDynamicImports: true
  }, {
    name: 'UnitsUI',
    dir: 'dist/esm',
    // file: 'dist/index.esm.js',
    format: 'es',
    exports: "named",
    plugins: [terser({
      ecma: 2015
    })]
  }, {
    name: 'UnitsUI',
    dir: 'dist/cjs',
    // file: 'dist/index.common.js',
    format: 'cjs',
    exports: "named",
    plugins: [terser({
      ecma: 2015
    })]
  }],
  plugins: [
    del({ targets: 'dist/*' }),
    vue({
      css: true,
      compileTemplate: true
    }),
    postcss({
      plugins: [
        autoprefixer(),
      ],
      minimize: true,
      extensions: ['.css', '.less'],
      extract: 'theme/index.css',
    }),
  ],
}
