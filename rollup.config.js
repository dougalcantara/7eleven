import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';

export default {
  input: 'src/7eleven.js',
  output: {
    file: 'dist/7eleven.js',
    name: '7eleven',
    format: 'umd'
  },
  watch: {
    include: 'src/**',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    // minify(),
  ],
}