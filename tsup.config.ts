import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  platform: 'node',
  clean: true,
  minify: true,
  dts: true,
  esbuildOptions: (options) => {
    options.footer = {
      js: 'module.exports = module.exports.default;',
    }
  },
})