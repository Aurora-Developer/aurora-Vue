<template>
  <footer>
    <div class="link-box">
      <div class="main-link">
        <!-- 使用 v-for 动态渲染 link-item 和其中的 a 标签 -->
        <div v-for="(item, index) in footerLinks" :key="index" class="link-item">
          <ul>
            <li class="title">{{ item.title }}</li>
            <!-- 渲染每个链接 -->
            <li v-for="(link, linkIndex) in item.links" :key="linkIndex">
              <a :href="link.url">{{ link.text }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="other-link">
        <div class="left">
          <div>Language: English</div>
          <div>
            <!-- 动态渲染额外的链接 -->
            <a v-for="(link, index) in additionalLinks" :key="index" :href="link.url">{{
              link.text
            }}</a>
          </div>
          <div>copyright: community developer.</div>
        </div>
        <div class="right">sns icon</div>
      </div>
    </div>
  </footer>
</template>
<script>
import { footerLinks, additionalLinks } from '../data/footerData'
export default {
  name: 'Footer',
  data() {
    return {
      footerLinks,
      additionalLinks,
    }
  },
}
</script>
<style>
/* 底部页脚部分 */
footer {
  overflow: hidden;
}

.link-box {
  width: 100%;
  padding-top: 20px;
  /* background-color: pink; */
  background:
    url(../assets/images/footer-bg.png),
    lightgray 50% / cover no-repeat;
  color: #fff;
}

.link-box .main-link {
  display: flex;
  /* background-color: #6fc; */
  padding: 15px;
}

.link-box .main-link:first-child {
  padding-left: 90px;
}

.link-box .link-item {
  padding: 10px 0 0 20px;
  flex-grow: 1;
  width: 340px;
}

.link-box .link-item a::before {
  content: '> ';
}

.link-box,
.main-link .first a::before {
  content: '';
}

.link-box .title {
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 15px;
}

.link-box .main-link .link-item li:not(.title) {
  line-height: 28px;
  padding-left: 4px;
}

.link-box .other-link {
  display: flex;
  margin-top: 15px;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(0, 0, 0, 0.45);
  padding: 15px 45px;
}

.link-box .other-link a {
  color: rgba(255, 255, 255, 0.5);
}

.link-box .other-link .left div {
  padding: 5px;
}

.link-box .other-link .left {
  flex-grow: 4;
}

.link-box .other-link .right {
  flex-grow: 1;
}
</style>
