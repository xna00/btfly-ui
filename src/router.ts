import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Start from './components/Start.vue'
import Markdown from './components/Markdown.vue'

import { createWebHashHistory, createRouter } from 'vue-router'
import { h } from 'vue'

const md = (path) => {
    console.log('md')
    return h(Markdown, {
        path,
        key:path
    })
}

const history = createWebHashHistory()
export const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        { path: '/home', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: '', redirect: '/doc/start' },
                { path: 'intro', component: md('../markdown/intro.md') },
                { path: 'install', component: md('../markdown/install.md') },
                { path: 'start', component: Start },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },
            ]
        }
    ]
})