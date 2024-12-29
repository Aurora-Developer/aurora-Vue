// import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from '@/App.vue'
import Home from '@/components/Home.vue'
import Download from '@/components/Download.vue'
import Dev from '@/components/Dev.vue'
import News from '@/components/News.vue'
import Privacy from '@/components/Privacy.vue'
import CookiesPolicy from '@/components/CookiesPolicy.vue'
import Agreement from '@/components/Agreement.vue'
import DMCA from '@/components/DMCA.vue'

import '@/assets/styles/global.css' // 引入全局 CSS 文件
import '@/assets/styles/common.css' // 引入 common CSS 文件

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/download', name: 'Download', component: Download },
    { path: '/dev', name: 'Dev', component: Dev },
    { path: '/news', name: 'News', component: News },
    { path: '/privacy', name: 'Privacy', component: Privacy },
    { path: '/cookies', name: 'Cookies', component: CookiesPolicy },
    { path: '/agreement', name: 'Agreement', component: Agreement },
    { path: '/dmca', name: 'DMCA', component: DMCA },
  ],
})

// 挂载 Vue 应用
createApp(App).use(router).mount('#app')
