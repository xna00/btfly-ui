import { router } from './router';
import { createApp } from 'vue'

import App from './App.vue'
import Markdown from './components/Markdown.vue'

import './index.scss'
import 'github-markdown-css'


const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('Markdown', Markdown)
