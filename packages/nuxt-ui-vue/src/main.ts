import './assets/css/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import config from './theme/nuxtLabsTheme'
import install from './index'

const app = createApp(App)
app.use(install, config)
app.mount('#app')
