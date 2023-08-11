import type { App } from 'vue'
import './assets/css/tailwind.css'
import type { NuxtLabsUIConfiguration } from './Types/variant'

const defaultOptions: WindiUIOptions = {
  prefix: 'U',
  registerComponents: true,
}

export interface WindiUIOptions {
  prefix?: string
  components?: any
  theme?: any
  registerComponents?: boolean
}

function create(createOptions: WindiUIOptions = {}) {
  const install = (app: App, installOptions: NuxtLabsUIConfiguration) => {
    const options = {
      ...defaultOptions,
      ...createOptions,
      ...installOptions,
    }
    if (options.registerComponents) {
      if (options.components) {
        options.components.forEach((component: any) => {
          const name = component.name?.startsWith('U') ? component.name.slice(1) : component.name

          app.component(`${options.prefix}${name}`, component)
        })
      }
    }
    app.provide('config', installOptions)
  }

  return {
    install,
  }
}

export default create
