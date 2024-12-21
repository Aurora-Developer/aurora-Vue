// import './assets/main.css'

import { createApp } from 'vue'
import { createRouter,  createWebHistory } from "vue-router";
import App from './App.vue'
import Home from './views/home.vue'
import Download from './views/download.vue'
import './assets/styles/global.css' // 引入全局 CSS 文件
import './assets/styles/common.css' // 引入common CSS 文件


const router = createRouter(
    {
        history: createWebHistory()
        routes: [
            { path: '/', name: 'Home', component: Home },
            { path: '/download', name: 'Download', component: Download }, 
        ]
    }
)


reateApp(App).use(router).mount('#app')
