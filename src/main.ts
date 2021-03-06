import { router } from './router';
import { createApp } from 'vue'

import App from './App.vue'
import Markdown from './components/Markdown.vue'
import Demo from './components/Demo.vue'

import './index.scss'
import 'github-markdown-css'

// import '//at.alicdn.com/t/font_2246654_e4wksnc3qlp.js'
const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('Markdown', Markdown)
app.component('Demo', Demo)
