<template lang="">
  <header class="glass" id="nav">
    <div class="menu">
      <label>
        <input type="checkbox" ref="menuCheckbox" />
        <span class="menu">
          <span class="hamburger"></span>
        </span>
        <ul class="hamburger-menu">
          <li>
            <a href="#/" @click="closeMenu">{{ $t('nav.home') }}</a>
          </li>
          <li>
            <a href="#/development" @click="closeMenu">{{ $t('nav.community') }}</a>
          </li>
          <li>
            <a href="#/news" @click="closeMenu">{{ $t('nav.news') }}</a>
          </li>
          <li>
            <a href="#/dev" @click="closeMenu">{{ $t('nav.developer') }}</a>
          </li>
          <li>
            <a href="#/download" @click="closeMenu">{{ $t('nav.download') }}</a>
          </li>
          <li>
            <a href="#/downloadStargate" @click="closeMenu">{{ $t('nav.downloadStargate') }}</a>
          </li>
          <li>
            <a href="#/about" @click="closeMenu">{{ $t('nav.about') }}</a>
          </li>
        </ul>
        <div class="menu-overlay" @click="closeMenu"></div>
      </label>
    </div>
    <div class="nav w">
      <ul>
        <li>
          <a href="#/" class="nav-link">{{ $t('nav.home') }}</a>
        </li>
        <li>
          <a href="#/development" class="nav-link">{{ $t('nav.community') }}</a>
        </li>
        <li>
          <a href="#/news" class="nav-link">{{ $t('nav.news') }}</a>
        </li>
        <li>
          <a href="#/dev" class="nav-link">{{ $t('nav.developer') }}</a>
        </li>
        <li>
          <a href="#/download" class="nav-link">{{ $t('nav.download') }}</a>
        </li>
        <li>
          <a href="#/downloadStargate" class="nav-link">{{ $t('nav.downloadStargate') }}</a>
        </li>
        <li>
          <a href="#/about" class="nav-link">{{ $t('nav.about') }}</a>
        </li>
      </ul>
    </div>
  </header>
</template>
<style>
/* 顶部导航部分 */
header#nav {
  position: fixed;
  height: 50px;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s;
  background: rgba(18, 18, 18, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(255, 149, 52, 0.1);
  top: 0;
}

.menu {
  padding-left: 48px;
  z-index: 2;
}

.menu label .menu {
  position: absolute;
  right: -90px;
  top: -100px;
  z-index: 100;
  width: 150px;
  height: 150px;
  background: rgba(255, 149, 52, 0.2);
  backdrop-filter: blur(15px);
  border-radius: 50%;
  transition: 0.5s ease-in-out;
  box-shadow:
    0 0 0 0 rgba(255, 149, 52, 0.3),
    0 0 0 0 rgba(255, 149, 52, 0.3);
  cursor: pointer;
}

.menu label .hamburger {
  position: absolute;
  top: 120px;
  left: 60px;
  width: 30px;
  height: 2px;
  background: rgb(230, 230, 230);
  display: block;
  transform-origin: center;
  transition: 0.5s ease-in-out;
}

.menu label .hamburger:after,
.menu label .hamburger:before {
  transition: 0.5s ease-in-out;
  content: '';
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;
  background: rgb(230, 230, 230);
}

.menu label .hamburger:before {
  top: -10px;
}

.menu label .hamburger:after {
  bottom: -10px;
}

.menu label input {
  display: none;
}

.menu label input:checked + .menu {
  background: rgba(18, 18, 18, 0.95);
  box-shadow:
    0 0 0 100vw rgba(18, 18, 18, 0.95),
    0 0 0 100vh rgba(255, 149, 52, 0.1);
  height: 140vh;
  width: 140vw;
  border-radius: 0;
  z-index: 9999;
}

.menu label input:checked + .menu .hamburger {
  transform: rotate(45deg);
  left: 134vw;
}

.menu label input:checked + .menu .hamburger:after {
  transform: rotate(90deg);
  bottom: 0;
}

.menu label input:checked + .menu .hamburger:before {
  transform: rotate(90deg);
  top: 0;
}
.menu label input + .menu + ul {
  transform: translate(50%, -100%); /* 向右移动 */
  width: 80%; /* 缩小宽度 */
  transition:
    transform 0.5s ease,
    width 0.5s ease; /* 添加平滑过渡 */
}

menu label {
  position: relative;
  z-index: 201;
}
.menu label input:checked + .menu + ul {
  position: absolute;
  top: 30vh;
  left: 50%;
  opacity: 1;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  pointer-events: auto;
  z-index: 10000;
}

.menu label ul {
  font-size: 20px;
  font-weight: bolder;
  z-index: 200;
  position: absolute;
  top: 30vh;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: 0.25s 0.2s ease-in-out;
  width: 100%;
  pointer-events: none;
}

.menu label a {
  margin-bottom: 1em;
  display: block;
  color: #fff;
  text-decoration: none;
}

.menu h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  text-align: center;
}

.nav {
  padding: 4px 40px 0; /* 增加左右内边距 */
}

.nav ul li {
  margin-right: 50px; /* 增加项目之间的间距 */
  padding: 8px 12px; /* 调整内边距 */
}

.nav ul li {
  display: inline-flex;
  padding: 8px 15px;
  margin-right: 40px;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.nav ul li:hover {
  border-bottom: 2px solid #ff952e;
}

.nav-link {
  color: #e6e6e6;
  font-size: 16px;
  font-weight: 500;
  transition: color 0.3s ease;
  text-decoration: none;
}

.nav-link:hover {
  color: #ff952e;
}

/* 汉堡菜单链接样式 */
.hamburger-menu li {
  margin-bottom: 20px;
  text-align: center;
}

.hamburger-menu a {
  color: #e6e6e6;
  font-size: 24px;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.hamburger-menu a:hover {
  color: #ff952e;
}

.hamburger-menu a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 50%;
  background-color: #ff952e;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.hamburger-menu a:hover::after {
  width: 100%;
}

/* 添加媒体查询以适应移动设备 */
@media screen and (max-width: 640px) {
  .menu label input:checked + .menu + ul {
    transform: translate(-50%, 20%);
  }

  .menu label ul {
    width: 90%;
  }

  .nav {
    padding: 0 20px; /* 移动端减小内边距 */
  }

  .nav ul li {
    margin-right: 30px; /* 移动端减小间距 */
  }
}

@media screen and (min-width: 641px) and (max-width: 1200px) {
  .nav ul li {
    margin-right: 40px; /* 平板端适中间距 */
  }
}

/* 添加遮罩层 */
.menu label input:checked ~ .menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 199;
}
</style>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'Nav',
  setup() {
    const menuCheckbox = ref(null)

    const closeMenu = () => {
      if (menuCheckbox.value) {
        setTimeout(() => {
          menuCheckbox.value.checked = false
        }, 700)
      }
    }

    // 滚动隐藏导航栏
    let prevScroll = window.scrollY

    // 确保导航栏初始显示
    onMounted(() => {
      const header = document.querySelector('header')
      header.style.top = '0px'
    })

    window.onscroll = function () {
      const header = document.querySelector('header')
      let lastScroll = window.scrollY
      if (prevScroll > lastScroll) {
        header.style.top = '0px'
      } else {
        header.style.top = '-50px'
      }
      prevScroll = lastScroll
    }

    return {
      closeMenu,
      menuCheckbox,
    }
  },
}
</script>
<style lang=""></style>
