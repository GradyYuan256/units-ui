import { fileURLToPath } from "url";
// import path from "path";

import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import del from 'rollup-plugin-delete'

// const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  input: 'src/index.js',
  output: [{
    globals: {
      vue: 'Vue'
    },
    name: 'UnitsUI',
    file: 'dist/index.umd.js',
    format: 'umd',
  }, {
    name: 'UnitsUI',
    file: 'dist/index.esm.js',
    format: 'es',
  }, {
    name: 'uniUnitsUIts',
    file: 'dist/index.common.js',
    format: 'cjs',
  }],
  watch: {
    include: 'src/**'
  },
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
      minimize: false,
      extensions: ['.css', '.less'],
      extract: path.resolve(__dirname, 'theme/index.css'),
    }),
    
  ],
}
