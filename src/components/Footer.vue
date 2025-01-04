<template>
  <footer>
    <div class="link-box">
      <div class="main-link">
        <div class="link-item" v-for="(section, key) in footerSections" :key="key">
          <ul>
            <li class="title">
              <transition name="fade" mode="out-in">
                <span :key="$i18n.locale">{{ $t(`footer.${key}.title`) }}</span>
              </transition>
            </li>
            <li v-for="(link, linkIndex) in section.links" :key="linkIndex">
              <a :href="link.url">
                <transition name="fade" mode="out-in">
                  <span :key="$i18n.locale">{{ $t(`footer.${key}.links.${link.key}`) }}</span>
                </transition>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="other-link">
        <div class="left">
          <div class="language-selector" @click="toggleLanguageDropdown" ref="langSelector">
            <Icon icon="mdi:earth" />
            <transition name="fade" mode="out-in">
              <span :key="$i18n.locale">{{ $t('footer.language') }}</span>
            </transition>
            <Icon
              :icon="isLanguageDropdownOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'"
              class="dropdown-icon"
            />

            <!-- 语言选择下拉菜单 -->
            <transition name="dropdown">
              <div v-if="isLanguageDropdownOpen" class="language-dropdown">
                <div
                  v-for="lang in availableLanguages"
                  :key="lang.code"
                  class="language-option"
                  :class="{ active: $i18n.locale === lang.code }"
                  @click="changeLanguage(lang.code)"
                >
                  <span>{{ lang.name }}</span>
                  <Icon v-if="$i18n.locale === lang.code" icon="mdi:check" class="check-icon" />
                </div>
              </div>
            </transition>
          </div>
          <div class="policy-links">
            <a
              v-for="(link, index) in additionalLinks"
              :key="index"
              :href="link.url"
              class="policy-link"
            >
              <Icon :icon="getLinkIcon(link.key)" class="policy-icon" />
              <transition name="fade" mode="out-in">
                <span :key="$i18n.locale">{{ $t(`footer.legal.links.${link.key}`) }}</span>
              </transition>
            </a>
          </div>
          <div class="copyright">
            <transition name="fade" mode="out-in">
              <span :key="$i18n.locale">{{
                $t('footer.copyright.rights', { year: currentYear })
              }}</span>
            </transition>
            <transition name="fade" mode="out-in">
              <span :key="$i18n.locale" class="developer">{{
                $t('footer.copyright.developer')
              }}</span>
            </transition>
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
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'Footer',
  components: {
    Icon,
  },
  setup() {
    const { locale } = useI18n()
    const isLanguageDropdownOpen = ref(false)
    const langSelector = ref(null)

    const availableLanguages = [
      { code: 'zh-CN', name: '简体中文' },
      { code: 'zh-TW', name: '繁體中文' },
    ]

    const toggleLanguageDropdown = (event) => {
      event.stopPropagation()
      isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value
    }

    const changeLanguage = (langCode) => {
      locale.value = langCode
      isLanguageDropdownOpen.value = false
    }

    // 点击外部关闭下拉菜单
    const handleClickOutside = (event) => {
      if (langSelector.value && !langSelector.value.contains(event.target)) {
        isLanguageDropdownOpen.value = false
      }
    }

    onMounted(() => {
      document.addEventListener('click', handleClickOutside)
    })

    onUnmounted(() => {
      document.removeEventListener('click', handleClickOutside)
    })

    return {
      isLanguageDropdownOpen,
      availableLanguages,
      toggleLanguageDropdown,
      changeLanguage,
      langSelector,
    }
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      footerSections: {
        about: {
          links: [
            { key: 'about', url: '#/about' },
            { key: 'team', url: '#/development' },
            { key: 'contact', url: '#/development' },
          ],
        },
        resources: {
          links: [
            { key: 'download', url: '#/download' },
            { key: 'dev', url: '#/dev' },
            { key: 'news', url: '#/news' },
          ],
        },
        legal: {
          links: [
            { key: 'privacy', url: '#/privacy' },
            { key: 'cookies', url: '#/cookies' },
            { key: 'agreement', url: '#/agreement' },
            { key: 'dmca', url: '#/dmca' },
          ],
        },
      },
      additionalLinks: [
        { key: 'privacy', url: '#/privacy' },
        { key: 'cookies', url: '#/cookies' },
        { key: 'agreement', url: '#/agreement' },
        { key: 'dmca', url: '#/dmca' },
      ],
    }
  },
  methods: {
    getLinkIcon(key) {
      const iconMap = {
        privacy: 'ri:shield-keyhole-fill',
        cookies: 'mdi:cookie',
        agreement: 'ri:file-text-fill',
        dmca: 'ri:copyright-fill',
      }
      return iconMap[key] || 'ri:file-fill'
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
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 6px;
  background: rgba(255, 140, 0, 0.1);
  border: 1px solid rgba(255, 140, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  user-select: none;
  white-space: nowrap;
  min-width: 140px;
}

.language-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  background: rgba(30, 30, 30, 0.95);
  border: 1px solid rgba(255, 140, 0, 0.2);
  border-radius: 6px;
  min-width: 100%;
  padding: 4px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.language-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  color: rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;
  border-radius: 4px;
  position: relative;
  white-space: nowrap;
}

.language-option:hover {
  background: rgba(255, 140, 0, 0.1);
  color: #ff8c00;
}

.language-option.active {
  background: rgba(255, 140, 0, 0.15);
  color: #ff8c00;
}

.check-icon {
  position: absolute;
  right: 12px;
  color: #ff8c00;
}

/* 下拉菜单动画 */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
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

  .language-dropdown {
    left: 50%;
    transform: translateX(-50%);
  }

  .dropdown-enter-from,
  .dropdown-leave-to {
    transform: translateY(-10px) translateX(-50%);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.dropdown-icon {
  color: #ff8c00;
  font-size: 18px;
}
</style>
