import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    file: 'dist/livekit-window.js',
    format: 'umd',
    name: 'LiveKitGlobal', // This is the global variable name if used via script tag
    globals: {
      'livekit-client': 'livekit',
    },
  },
  plugins: [
    resolve(),
    commonjs(),
  ],
};

