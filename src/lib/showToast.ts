import { createApp, h } from 'vue'
import Toast from './Toast.vue'
export default (options: { content: any, showTime: Number }) => {
    const { content, showTime } = options
    const div = document.createElement('div')
    document.body.appendChild(div)
    const app = createApp({
        data() {
            return {
                visible: true
            }
        },
        render() {
            return h(Toast, {
                visible: this.visible,
                showTime,
                'onUpdate:visible': (newVisible) => {
                    if (newVisible === false) {
                        this.visible = false
                        setTimeout(() => {
                            app.unmount(div)
                            div.remove()
                        }, 1000)
                    }
                }
            }, { default: () => content })
        }
    })
    app.mount(div)

}