<template lang="">
  <header class="glass" id="nav">
    <div class="menu">
      <!-- <div class="menu-block"></div> -->
      <label>
        <input type="checkbox" />
        <span class="menu">
          <span class="hamburger"></span>
        </span>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
        </ul>
      </label>
    </div>
    <div class="nav w">
      <ul>
        <li><a href="#">home</a></li>
        <li><a href="#">home</a></li>
        <li><a href="#">home</a></li>
        <li><a href="#">home</a></li>
        <li><a href="#">home</a></li>
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
  z-index: 1;
  transition: all 0.3s;
}

.menu {
  /* background: #66ffcc; */
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
  background: rgba(255, 149, 52, 0.6);
  backdrop-filter: blur(15px);
  border-radius: 50% 50% 50% 50%;
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
  box-shadow:
    0 0 0 100vw rgba(0, 0, 0),
    0 0 0 100vh rgba(255, 149, 52, 0.3);
  background: rgba(251, 148, 51, 0.7);
  backdrop-filter: blur(15px);
  height: 140vh;
  width: 140vw;
  border-radius: 0;
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

.menu label input:checked + .menu + ul {
  opacity: 1;
}

.menu label ul {
  font-size: 20px;
  font-weight: bolder;
  z-index: 200;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.25s 0.2s ease-in-out;
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

.nav ul li {
  display: inline-flex;
  padding: 10px 10px 5px;
  margin-right: 115px;
  border-bottom: 3px solid #ffb26a;
}

.nav ul li a {
  font-size: 18px;
  text-align: center;
  font-weight: 700px;
  color: #fff;
}
</style>

<script>
export default {
  name: 'Nav', // 组件名称
}

let prevScroll = window.scrollY
window.onscroll = function () {
  console.log(1)
  const header = document.querySelector('header')
  let lastScroll = window.scrollY // 使用 scrollY 获取滚动位置
  if (prevScroll > lastScroll) {
    header.style.top = '0px' // 向上滚动，显示 header
  } else {
    header.style.top = '-50px' // 向下滚动，隐藏 header
  }
  prevScroll = lastScroll // 更新 prevScroll
}
</script>
<style lang=""></style>
