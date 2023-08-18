import { resolve } from 'node:path'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://github.com/qmhc/vite-plugin-dts
import dtsPlugin from 'vite-plugin-dts'

import * as pkg from './package.json'

const externals = [
  ...Object.keys(pkg.peerDependencies || {}),
]
export default defineConfig({
  plugins: [
    Vue(),
    dtsPlugin({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      formats: ['es', 'cjs'],
      name: 'nuxt-ui-vue',
      fileName: format => format === 'cjs' ? 'nuxt-ui-vue.cjs' : 'nuxt-ui-vue.mjs',
    },
    rollupOptions: {
      external: externals,
      output: {
        format: 'esm',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
