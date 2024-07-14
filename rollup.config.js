import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import packageJson from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    terser(),
  ],
  watch: {
    include: 'src/**',
  },
};
