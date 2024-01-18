import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import eslint from '@rollup/plugin-eslint';

export default defineConfig({
  input: 'src/main.ts',
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
  },
  plugins: [typescript({ tsconfig: './tsconfig.json' }), eslint()],
});
