<p align="center">

<h1 align="center">Nuxt-UI-Vue</h1>
</p>

## Current Versions

With each release of `nuxt-ui-vue`, a parallel update will be applied to `nuxt-ui-vue`, ensuring that the library is up to date and providing you, as the developer, with a seamless experience.

Below are the current versions of both libraries:

| nuxt-ui          | nuxt-ui-vue      |
|------------------|------------------|
| v2.8.1           | v1.0.1-beta.9    |

## Features

- 🦾 **TypeScript Support** - Built with TypeScript in mind and from the ground up.
- 🔥 **Icon** - Use any icon from [Iconify](https://icones.netlify.app/) in your project from your favourite icon set.
-  🛠️ **On Demand Import** - Nuxt UI Vue comes with an intelligent resolver that automatically imports only used components.
- ⚡️ **Powerful Tools** - Nuxt UI Vue is built on top of powerful tools such as TailwindCss, VueUse, Headless UI etc.
- 🎨 **Themeable** - Customize any component to match your brand and style.

## Getting Started 

Add `Nuxt UI Vue` to your project by running one of the following commands:

```bash

# pnpm
pnpm add nuxt-ui-vue

# yarn
yarn add nuxt-ui-vue

# npm
npm install nuxt-ui-vue

```

And also add `@tailwindcss/forms` plugin by running the following command:

```bash

# pnpm
pnpm add -D @tailwindcss/forms

# yarn
yarn add --dev @tailwindcss/forms

# npm
npm install -D @tailwindcss/forms

```

## Usage


1. Register the `@tailwindcss/forms` plugin and add the `Nuxt-UI-Vue` theme file, the darkMode class and the tailwindCss colors configuration in your tailwind.config.cjs file as shown below:


```ts
import tailwindColors from './node_modules/tailwindcss/colors'

const colorSafeList = []

const deprecated = ['lightBlue', 'warmGray', 'trueGray', 'coolGray', 'blueGray']

for (const colorName in tailwindColors) {
  if (deprecated.includes(colorName))
    continue

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

  const pallette = tailwindColors[colorName]

  if (typeof pallette === 'object') {
    shades.forEach((shade) => {
      if (shade in pallette) {
        colorSafeList.push(`text-${colorName}-${shade}`),
        colorSafeList.push(`accent-${colorName}-${shade}`),
        colorSafeList.push(`bg-${colorName}-${shade}`),
        colorSafeList.push(`hover:enabled:bg-${colorName}-${shade}`),
        colorSafeList.push(`focus:bg-${colorName}-${shade}`),
        colorSafeList.push(`ring-${colorName}-${shade}`),
        colorSafeList.push(`focus:ring-${colorName}-${shade}`),
        colorSafeList.push(`border-${colorName}-${shade}`)
      }
    })
  }
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/nuxt-ui-vue/dist/theme/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  safelist: colorSafeList,
  theme: {
    extend: {
      colors: tailwindColors
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
```

Since TailwindCss doesn't support dynamic class names, you need to configure the `tailwind.config.cjs` file as shown above. You can read more about safelisting tailwindcss classes [here](https://tailwindcss.com/docs/content-configuration#safelisting-classes)


### Component registration


With `Nuxt UI Vue`, you have the flexibility to register components precisely as you wish:

### Import All Components

To import all the components provided by `Nuxt UI Vue`, add `Nuxt UI Vue` in your main entry file as shown below:

With Nuxt-UI-Vue, you have the flexibility to register components precisely as you wish:

```ts
import { createApp } from 'vue'
import './style.css'
import nuxtLabsTheme from 'nuxt-ui-vue/dist/theme/nuxtlabsTheme'

import install from 'nuxt-ui-vue'
import App from './App.vue'

const app = createApp(App)
app.use(install, nuxtLabsTheme)
app.mount('#app')
```

**By doing this, you are importing all the components that are provided by Nuxt-UI-Vue and in your final bundle all the components including the ones you didn't use will be bundled. Use this method of component registration if you are confident that you will use all the components.**

### Individual Components with Tree Shaking

Probably you might not want to globally register all the components but instead only import the components that you need. You can achieve this by doing the following: 

1. Import the `createUI` option as well as the components you need as shown below:

```ts
import { createApp } from 'vue'
import './style.css'
import nuxtLabsTheme from 'nuxt-ui-vue/dist/theme/nuxtlabsTheme'

import { UButton, UDropdown, createUI } from 'nuxt-ui-vue'

import App from './App.vue'

const app = createApp(App)

const UI = createUI({
  prefix: 'T',
  components: [UDropdown, UButton],
})

app.use(UI, nuxtLabsTheme)

app.mount('#app')
```

2. Now you can use the component as shown below:

```vue
<script setup lang='ts'>
const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }], [{
    label: 'Edit',
    icon: 'heroicons:pencil-square-20-solid',
    shortcuts: ['E'],
    click: () => {
      // eslint-disable-next-line no-console
      console.log('Edit')
    }
  }, {
    label: 'Duplicate',
    icon: 'heroicons:document-duplicate-20-solid',
    shortcuts: ['D'],
    disabled: true
  }], [{
    label: 'Archive',
    icon: 'heroicons:archive-box-20-solid'
  }, {
    label: 'Move',
    icon: 'heroicons:arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'heroicons:trash-20-solid',
    shortcuts: ['⌘', 'D']
  }]
]
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <div>
      <TDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <TButton color="white" label="Options" trailing-icon="heroicons:chevron-down-20-solid" />
      </TDropdown>
    </div>
  </div>
</template>
```

The `prefix` option is only available for individual component imports.

### Auto Imports with Tree Shaking

**Nuxt-UI-Vue** comes with an intelligent resolver that automatically imports only used components.

This is made possible by leveraging a tool known as [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) which lets you auto import components on demand thus omitting import statements and still get the benefits of tree shaking.

To achieve this you need to do the following: 

1. Install the `unplugin-vue-components` package by running one of the following commands:

```bash

#pnpm
pnpm add -D unplugin-vue-components

#yarn
yarn add -D unplugin-vue-components

#npm
npm i -D unplugin-vue-components

```

2. Head over to your `main.ts` or `main.js` file and set `registerComponents` to `false` as shown below:

```ts
import { createApp } from 'vue'
import './style.css'
import nuxtLabsTheme from 'nuxt-ui-vue/dist/theme/nuxtlabsTheme'

import { createUI } from 'nuxt-ui-vue'

import App from './App.vue'

const app = createApp(App)

const UI = createUI({
  registerComponents: false,
})

app.use(UI, nuxtLabsTheme)

app.mount('#app')
```

3. Head over to your `vite.config.ts` or `vite.config.js` file and add the following:

```ts
// other imports
import { NuxtUIVueComponentResolver } from 'nuxt-ui-vue'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    // other plugins
    Components({
      resolvers: [
        NuxtUIVueComponentResolver()
      ]
    })
  ],
})
```

4. Now you can simply use any component that you want and it will be auto imported on demand ✨

```vue
<script setup lang='ts'>
const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }], [{
    label: 'Edit',
    icon: 'heroicons:pencil-square-20-solid',
    shortcuts: ['E'],
    click: () => {
      // eslint-disable-next-line no-console
      console.log('Edit')
    }
  }, {
    label: 'Duplicate',
    icon: 'heroicons:document-duplicate-20-solid',
    shortcuts: ['D'],
    disabled: true
  }], [{
    label: 'Archive',
    icon: 'heroicons:archive-box-20-solid'
  }, {
    label: 'Move',
    icon: 'heroicons:arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'heroicons:trash-20-solid',
    shortcuts: ['⌘', 'D']
  }]
]
</script>

<template>
  <div class="grid place-items-center w-full min-h-screen">
    <div>
      <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
        <UButton color="green" label="Options" trailing-icon="heroicons:chevron-down-20-solid" />
      </UDropdown>
    </div>
  </div>
</template>
```

## Component Customizations

In regards to customization, Nuxt UI Vue offers two ways of customizing your components. The first way is through the `variants` property and the second way is by creating your own `theme file`.

Here is an example of customizing a `UButton` component through the `variants` property: 

```vue
<template>
  <div>
    <UButton
      :variants="{
        'my-variant': {
          rounded: 'rounded-full',
        },
      }" :variant="['my-variant']" color="red" label="Button"
    />
  </div>
</template>
```

By default, the default `roundedness` of the `UButton` component is `rounded-md`. However, we have customized its appearance by using the variants property to change its `roundedness` and then we used the variant prop to pass our variant which is `my-variant`  ( you can name it whatever you want) to the `variant` array and now the `UButton` component will be rendered with a fully rounded appearance (rounded-full).

You can customize each component this way using the component's preset which can be found [here](./packages/nuxt-ui-vue/src/theme/nuxtLabsTheme.ts)

For any component that uses the `variant` prop such as the `UButton`, `UBadge`, `UInput`, `UTextarea`, `USelect`, etc, use the `intent` prop instead as shown below:

```js
<template>
    <div>
        <UButton intent="soft" color="red" label="Button" />
    </div>
</template>
```

```js
<template>
  <div>
    <UBadge color="red" intent="solid" label="Badge" />
  </div>
</template>
```


The `Notifications` component comes with a position prop to enable you to specify the position of the  `Notifications` component. To get started with it, you need to import the `injectToast()` function and the `UNotifications` component in your `App.vue` file as shown below:

```vue
<!-- app.vue file -->
<script setup lang="ts">
import { injectToast } from 'nuxt-ui-vue'

injectToast()
</script>

<template>
  <div>
    <Hello />
    <UNotifications position="top-right" />
  </div>
</template>
```

By default, the position of the component is set to `bottom-right`.

Then in your other component, for example, Hello.vue component, you can do the following:

```vue
<!-- Hello.vue component -->

<script setup lang="ts">
import { useToast } from 'nuxt-ui-vue'

const toast = useToast()
</script>

<template>
  <UButton
    label="Show toast" @click="toast.add({
      title: 'Update downloaded.',
      description: 'It will be installed on restart. Restart now?',
      icon: 'octicon:desktop-download-24',
    })"
  />
</template>
```


🥳 Well done, you can now go ahead and build your web application with ease.

## Contributions

Contributions are welcome and encouraged! If you have any ideas or suggestions for new features, or if you encounter any bugs or issues, please open an issue or submit a pull request on the GitHub repository. 

Developers interested in contributing should read the [Code of Conduct](./CODE_OF_CONDUCT.md) and the [Contributing Guide](./CONTRIBUTING.md).

## Credits

- [@nuxt/ui](https://github.com/nuxt/ui)
- [@headlessui/vue](https://headlessui.com)
- [@vueuse/core](https://vueuse.org)
- [TailwindCss](https://tailwindcss.com)

## License

[MIT](./LICENSE) License © 2023 [Selemondev](https://github.com/selemondev)
