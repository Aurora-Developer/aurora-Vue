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
          <div class="language-selector">
            <Icon icon="mdi:earth" />
            <span>语言：简体中文</span>
          </div>
          <div class="policy-links">
            <a
              v-for="(link, index) in additionalLinks"
              :key="index"
              :href="link.url"
              class="policy-link"
            >
              <Icon :icon="getLinkIcon(link.text)" class="policy-icon" />
              {{ link.text }}
            </a>
          </div>
          <div class="copyright">
            <span>© {{ currentYear }} Aurora Community.</span>
            <span class="developer">Made with ❤️ by Community Developers</span>
          </div>
        </div>
        <div class="right">
          <a href="https://github.com/Aurora-Developer/" class="sns-icon"
            ><Icon icon="ri:github-fill"
          /></a>
          <a href="https://space.bilibili.com/647566583/" class="sns-icon"
            ><Icon icon="ri:bilibili-fill"
          /></a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { footerLinks, additionalLinks } from '../data/footerData'
import { Icon } from '@iconify/vue'

export default {
  name: 'Footer',
  components: {
    Icon,
  },
  data() {
    return {
      footerLinks,
      additionalLinks,
      currentYear: new Date().getFullYear(),
    }
  },
  methods: {
    getLinkIcon(text) {
      const iconMap = {
        隐私政策: 'ri:shield-keyhole-fill',
        Cookie政策: 'mdi:cookie',
        用户协议: 'ri:file-text-fill',
        DMCA: 'ri:copyright-fill',
      }
      return iconMap[text] || 'ri:file-fill'
    },
  },
}
</script>
<style>
footer {
  overflow: hidden;
  font-family: 'Minecraft', Arial, sans-serif;
}

.link-box {
  width: 100%;
  padding-top: 40px;
  background:
    url(../assets/images/footer-bg.png),
    rgba(20, 20, 20, 0.95) 50% / cover no-repeat;
  color: #fff;
  border-top: 3px solid #ff8c00;
}

.link-box .main-link {
  display: flex;
  padding: 25px 40px;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}

.link-box .main-link:first-child {
  padding-left: 90px;
}

.link-box .link-item {
  padding: 20px;
  flex: 1;
  min-width: 250px;
  transition: transform 0.2s ease;
}

.link-box .link-item:hover {
  transform: translateY(-5px);
}

.link-box .link-item a {
  color: #e0e0e0;
  transition: color 0.3s ease;
  text-decoration: none;
  position: relative;
  padding-left: 0;
}

.link-box .link-item a:hover {
  color: #ff8c00;
}

.link-box .title {
  font-size: 22px;
  font-weight: 700;
  padding-bottom: 20px;
  color: #ff8c00;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 2px solid rgba(255, 140, 0, 0.3);
  margin-bottom: 15px;
}

.link-box .main-link .link-item li:not(.title) {
  line-height: 32px;
  padding-left: 4px;
  transition: padding-left 0.3s ease;
}

.link-box .main-link .link-item li:not(.title):hover {
  padding-left: 8px;
}

.link-box .other-link {
  display: flex;
  margin-top: 30px;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px 60px;
  border-top: 1px solid rgba(255, 140, 0, 0.2);
}

.link-box .other-link a {
  color: rgba(255, 255, 255, 0.7);
  margin: 0 10px;
  text-decoration: none;
  transition: color 0.3s ease;
}

.link-box .other-link a:hover {
  color: #ff8c00;
}

.link-box .other-link .left div {
  padding: 8px 0;
  color: rgba(255, 255, 255, 0.7);
}

.link-box .other-link .left {
  flex-grow: 4;
}

.link-box .other-link .right {
  flex-grow: 1;
  text-align: right;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
  align-items: center;
}

.copyright {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.copyright .developer {
  color: #ff8c00;
  font-weight: 500;
}

.sns-icon {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.3s ease;
}

.sns-icon:hover {
  color: #ff8c00;
  transform: translateY(-3px);
}

.language-selector {
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
}

.language-selector i {
  color: #ff8c00;
}

.policy-links {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin: 5px 0;
}

.policy-link {
  display: flex !important;
  align-items: center;
  gap: 6px;
  padding: 4px 8px !important;
  margin: 0 !important;
  border-radius: 4px;
  background: rgba(255, 140, 0, 0.1);
  border: 1px solid rgba(255, 140, 0, 0.2);
  font-size: 14px;
}

.policy-link:hover {
  background: rgba(255, 140, 0, 0.2);
  border-color: rgba(255, 140, 0, 0.3);
}

.policy-link i {
  color: #ff8c00;
  font-size: 12px;
}

@media (max-width: 768px) {
  .link-box .main-link {
    flex-direction: column;
    padding: 15px;
  }

  .link-box .main-link:first-child {
    padding-left: 15px;
  }

  .link-box .other-link {
    flex-direction: column;
    text-align: center;
    padding: 20px;
  }

  .link-box .other-link .right {
    margin-top: 20px;
    text-align: center;
  }

  .policy-links {
    justify-content: center;
  }

  .language-selector {
    justify-content: center;
  }
}
</style>
