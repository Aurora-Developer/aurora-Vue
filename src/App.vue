<template>
  <div>
    <Nav />
    <router-view />
    <Cookies />
    <Footer />
  </div>
</template>

<script>
// import { RouterView } from 'vue-router'
import Cookies from './components/Cookies.vue'
import Footer from './components/Footer.vue'
import Nav from './components/Nav.vue'
import News from './components/News.vue'

export default {
  name: 'App',
  components: {
    Nav, // 注册组件
    Footer,
    Cookies,
  },
}
</script>
