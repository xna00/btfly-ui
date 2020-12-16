import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import Markdown from './components/Markdown.vue'
import CheckboxDemo from './components/CheckboxDemo.vue'

import intro from './markdown/intro.md'
import install from './markdown/install.md'
import start from './markdown/start.md'

import { createWebHashHistory, createRouter } from 'vue-router'
import { h } from 'vue'

const md = (content) => {
    return h(Markdown, {
        content,
        key: content
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
                { path: '', redirect: '/doc/intro' },
                { path: 'intro', component: md(intro) },
                { path: 'install', component: md(install) },
                { path: 'start', component: md(start) },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo },
                { path: 'checkbox', component: CheckboxDemo }
            ]
        }
    ]
})