import type { ComponentResolver } from 'unplugin-vue-components'

export function NuxtUIVueComponentResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.match(/^U[A-Z]/))
        return { name, from: 'nuxt-ui-vue' }
    },
  }
}
