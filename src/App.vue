<template>
  <div>
    <Nav />
    <router-view />
    <Cookies />
    <Footer />
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
import Cookies from './components/cookies.vue'
import Footer from './components/footer.vue'
import Nav from './components/nav.vue'

export default {
  name: 'App',
  components: {
    Nav, // 注册组件
    Footer,
    Cookies,
  },
}
</script>
