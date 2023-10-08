import { resolve } from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
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
    Components({
      dts: true,
      resolvers: [
        (componentName: string) => {
          if (componentName.startsWith('Icon')) {
            return {
              name: componentName,
              from: '@iconify/vue',
            }
          }
        },
      ],

      types: [
        {
          from: 'vue-router',
          names: ['RouterLink', 'RouterView', 'RouteLocationRaw'],
        },
      ],
    }),

    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        {
          'classnames': [
            ['default', 'classNames'],
          ],
          'defu': [
            'defu',
          ],
          '@iconify/vue': [
            'loadIcon',
          ],
          'ohash': [
            'isEqual',
          ],
        },
        {
          from: 'vue-router',
          imports: ['RouteLocationRaw'],
          type: true,
        },
      ],

      dirs: ['./src/utils', './src/Types/**', './src/theme', './src/composables', './src/components/Types'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
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
