export default {
  esm: 'rollup',
  cjs: 'rollup',
  umd: {
    name: 'myBundle',
    minFile: true,
    globals: {
      react: 'React'
    }
  }
}