<template>
  <div>
    <Nav />
    <router-view />
    <Cookies />
    <Footer />
    <LanguageNotice v-model="showLanguageNotice" />
  </div>
</template>

<script>
// import { RouterView } from 'vue-router'
import Cookies from './components/Cookies.vue'
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'
import News from './components/News.vue'
import { initScrollReveal, addScrollRevealClass } from './utils/scrollReveal'
import LanguageNotice from './components/LanguageNotice.vue'
import { ref, onMounted } from 'vue'

export default {
  name: 'App',
  components: {
    Nav, // 注册组件
    Footer,
    Cookies,
    LanguageNotice,
  },
  mounted() {
    this.initScrollEffects()
  },
  methods: {
    initScrollEffects() {
      // 确保在DOM更新后执行
      this.$nextTick(() => {
        addScrollRevealClass()
        initScrollReveal()
      })
    },
  },
  watch: {
    // 监听路由变化，在路由变化后重新初始化动画
    $route() {
      setTimeout(() => {
        this.initScrollEffects()
      }, 100)
    },
  },
  setup() {
    const showLanguageNotice = ref(false)

    onMounted(() => {
      // 监听语言切换事件
      window.addEventListener('languageChanged', () => {
        showLanguageNotice.value = true
      })
    })

    return {
      showLanguageNotice,
    }
  },
}
</script>

<style>
/* 确保页面可以滚动 */
html,
body {
  min-height: 101vh;
}
</style>
