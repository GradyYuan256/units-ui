import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

import UnitsUI from 'units-ui'
import 'units-ui/dist/theme/index.css'

const app = createApp(App)

app.use(UnitsUI)

app.mount('#app')
