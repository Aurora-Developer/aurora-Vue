// import './assets/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from '@/App.vue'
import Home from '@/components/Home.vue'
// 移除单独的下载组件引入
// import Download from '@/components/Download.vue'
// import DownloadStargate from '@/components/DownloadStargate.vue'
// 添加新的合并下载组件
import Downloads from '@/components/Downloads.vue'
import Dev from '@/components/Dev.vue'
import News from '@/components/News.vue'
import Privacy from '@/components/Privacy.vue'
import CookiesPolicy from '@/components/CookiesPolicy.vue'
import Agreement from '@/components/Agreement.vue'
import DMCA from '@/components/DMCA.vue'
import About from '@/components/About.vue'
import Development from '@/components/Development.vue'
import NotFound from '@/components/404.vue'
import { initScrollReveal, addScrollRevealClass } from '@/utils/scrollReveal'
import i18n from './i18n'

import '@/assets/styles/global.css' // 引入全局 CSS 文件
import '@/assets/styles/common.css' // 引入 common CSS 文件

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    // 更新路由，使用新的合并下载组件
    { path: '/download', name: 'Downloads', component: Downloads },
    // 为了保持向后兼容，将原有路径重定向到新组件
    { path: '/downloadStargate', redirect: '/download' },
    { path: '/dev', name: 'Dev', component: Dev },
    { path: '/news', name: 'News', component: News },
    { path: '/privacy', name: 'Privacy', component: Privacy },
    { path: '/cookies', name: 'Cookies', component: CookiesPolicy },
    { path: '/agreement', name: 'Agreement', component: Agreement },
    { path: '/dmca', name: 'DMCA', component: DMCA },
    { path: '/about', name: 'About', component: About },
    { path: '/development', name: 'Development', component: Development },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

// 在路由变化后执行
router.afterEach(() => {
  // 确保页面滚动到顶部后再初始化滚动显示效果
  window.scrollTo(0, 0)
  setTimeout(() => {
    addScrollRevealClass()
    initScrollReveal()
  }, 100)
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
