import { createI18n } from 'vue-i18n'
import zhHans from './zh-Hans'
import zhHant from './zh-Hant'

// 创建事件总线
const languageChangeEvent = new Event('languageChanged')

// 获取系统语言
function getSystemLanguage() {
  const language = navigator.language || navigator.userLanguage
  // 如果是繁体中文地区（台湾、香港、澳门）
  if (['zh-TW', 'zh-HK', 'zh-MO'].includes(language)) {
    return 'zh-TW'
  }
  // 如果是中国大陆地区
  if (language.toLowerCase().startsWith('zh')) {
    // 触发语言切换事件
    setTimeout(() => {
      window.dispatchEvent(languageChangeEvent)
    }, 0)
    return 'zh-CN'
  }
  return 'zh-CN'
}

const i18n = createI18n({
  legacy: false,
  locale: getSystemLanguage(),
  fallbackLocale: 'zh-TW',
  messages: {
    'zh-CN': zhHans,
    'zh-TW': zhHant,
  },
})

export default i18n
