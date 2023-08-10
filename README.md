<p align="center">
<img src="./docs/docs/public/windi.svg" style="width:100px;" />
<h1 align="center">NuxtLabs-UI-Vue</h1>
<p align="center">Build Accessible Apps 10x faster</p>
</p>

## Features

- 🦾 **TypeScript Support** - Built with TypeScript in mind and from the ground up.
- 🔥 **Icon** - Use any icon from [Iconify](https://icones.netlify.app/) in your project from your favourite icon set.
-  🛠️ **On Demand Import** - NuxtLabs-UI-Vue comes with an intelligent resolver that automatically imports only used components.
- ⚡️ **Powerful Tools** - NuxtLabs-UI-Vue is built on top of powerful tools such as TailwindCss, VueUse, Headless UI etc.
- 🎨 **Themeable** - Customize any part of our beautiful components to match your style.

## Getting Started 

Add `NuxtLabs-UI-Vue` to your project by running one of the following commands:

```bash

# pnpm
pnpm add windi-vue

# yarn
yarn add windi-vue

# npm
npm install windi-vue

```

## Usage

1. Add the NuxtLabs-UI-Vue theme file and the darkMode class in your tailwind.config.cjs file as shown below:

```ts
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', 'node_modules/windi-vue/dist/theme/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
```


### Component registration

With NuxtLabs-UI-Vue, you have the flexibility to register components precisely as you wish:

### Import All Components

To import all the components provided by `NuxtLabs-UI-Vue`, add `WindiUI` in your main entry file as shown below:

```ts
import { createApp } from 'vue'
import windiTheme from 'windi-vue/dist/theme/windiTheme'
import WindiUI from 'windi-vue'
import App from './App.vue'

const app = createApp(App)
app.use(WindiUI, windiTheme)
app.mount('#app')
```

**By doing this, you are importing all the components that are provided by NuxtLabs-UI-Vue and in your final bundle all the components including the ones you didn't use will be bundled. Use method of component registration if you are confident that you will use all the components.**

### Individual Components with Tree Shaking

Probably you might not want to globally register all the components but instead only import the components that you need. You can achieve this by doing the following: 

1. Import the `createWindiUI` option as well as the components you need as shown below:

```ts
import { createApp } from 'vue'
import './style.css'
import windiTheme from 'windi-vue/dist/theme/windiTheme'

import { WKbd, createWindiUI } from 'windi-vue'

import App from './App.vue'

const app = createApp(App)

const UI = createWindiUI({
  prefix: 'T',
  components: [WKbd],
})

app.use(UI, windiTheme)

app.mount('#app')
```

2. Now you can use the component as shown below:

```js
<template>
  <div>
    <TKbd>K</TKbd>
  </div>
</template>
```

The `prefix` option is only available for individual component imports.

### Auto Imports with Tree Shaking

**NuxtLabs-UI-Vue** comes with an intelligent resolver that automatically imports only used components.

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
import windiTheme from 'windi-vue/dist/theme/windiTheme'

import { createWindiUI } from 'windi-vue'

import App from './App.vue'

const app = createApp(App)

const UI = createWindiUI({
  registerComponents: false,
})

app.use(UI, windiTheme)

app.mount('#app')
```

3. Head over to your `vite.config.ts` or `vite.config.js` file and add the following:

```ts
// other imports
import { WindiUIComponentResolver } from 'windi-vue'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    // other plugins
    Components({
      resolvers: [
        WindiUIComponentResolver()
      ]
    }),
  ],
})
```

4. Now you can simply use any component that you want and it will be auto imported on demand ✨

```js
<template>
  <div>
    <WKbd>K</WKbd>
  </div>
</template>
```

## Troubleshooting TypeScript Error

If you're encountering the TypeScript error: **Cannot find module 'windi-vue/dist/theme/windiTheme' or its corresponding type declarations**, you can follow these steps to resolve it:

1. Create a `windi-vue.d.ts` declaration file in your `src` directory and inside it paste the following code:

```ts
declare module 'windi-vue/dist/theme/windiTheme'
```

The error should now be resolved.

This issue is set to be fixed in the next release of **NuxtLabs-UI-Vue v0.0.1 Alpha**


🥳 Well done, you can now go ahead and build your web application with ease.

## Contributions

Contributions are welcome and encouraged! If you have any ideas or suggestions for new features, or if you encounter any bugs or issues, please open an issue or submit a pull request on the GitHub repository. 

Developers interested in contributing should read the [Code of Conduct](./CODE_OF_CONDUCT.md) and the [Contributing Guide](./CONTRIBUTING.md).

## Credits

- [@headlessui/vue](https://headlessui.com)
- [@vueuse/core](https://vueuse.org)
- [TailwindCss](https://tailwindcss.com)
- [UnoCss](https://unocss.com) for the landing page rainbow animation.

## License

[MIT](./LICENSE) License © 2023 [Selemondev](https://github.com/selemondev)