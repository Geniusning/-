import { createApp } from 'vue'
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueUeditorWrap from 'vue-ueditor-wrap';

import { Boot } from '@wangeditor/editor'
import markdownModule from '@wangeditor/plugin-md'
Boot.registerModule(markdownModule)



const app = createApp(App)
app.use(ElementPlus)
app.use(VueUeditorWrap)
app.mount('#app')
