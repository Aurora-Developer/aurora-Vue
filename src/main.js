// import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Download from './components/Download.vue'
import './assets/styles/global.css' // 引入全局 CSS 文件
import './assets/styles/common.css' // 引入 common CSS 文件

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/download', name: 'Download', component: Download },
    ],
})

// 挂载 Vue 应用
createApp(App).use(router).mount('#app')

