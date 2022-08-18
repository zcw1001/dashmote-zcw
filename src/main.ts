import { createApp } from 'vue'
import { Modal } from 'ant-design-vue';

import App from './App.vue'

import './assets/reset.css'
import './assets/common.css'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
app.use(Modal)

app.mount('#app')
