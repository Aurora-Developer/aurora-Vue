<template>
  <div class="background"></div>
  <div class="background-overlay"></div>


  <!-- 主内容区域 -->
  <main class="main-content">
    <div class="content-container scroll-reveal">
      <!-- App Logo -->
      <div class="logo-container">
        <img src="https://www.aurora-sky.top/icon.png" alt="App Logo" class="app-logo" />
      </div>

      <!-- App 名称 -->
      <h1 class="app-title">{{ $t('downloadStargate.title') }}</h1>

      <!-- App 简介 -->
      <p class="app-desc">{{ $t('downloadStargate.description') }}</p>

      <!-- 下载按钮 -->
      <div class="btn-container">
        <a
          v-for="button in appData.buttons"
          :key="button.id"
          class="download-btn"
          :class="{ loading: loading }"
          @click="handleAction(button)"
        >
          {{ loading ? $t('download.button.loading') : $t('download.button.download') }}
        </a>
      </div>

      <!-- 错误提示 -->
      <div v-if="error" class="error-message">
        {{ error }}
      </div>

      <!-- 版本信息 -->
      <div class="version-info">
        <p>
          {{ $t('download.version.current') }}<span>{{ appData.versionInfo.version }}</span>
        </p>
        <p>
          {{ $t('download.version.updateTime') }}<span>{{ appData.versionInfo.updateTime }}</span>
        </p>
      </div>
    </div>

    <!-- 更新日志区域 -->
    <div class="changelog-container scroll-reveal" id="changelog">
      <h2 class="changelog-title">{{ $t('download.changelog.title') }}</h2>
      <div class="changelog-content">
        <div
          v-for="(log, index) in appData.changelog"
          :key="index"
          class="changelog-item scroll-reveal"
        >
          <h3>{{ log.version }}</h3>
          <ul>
            <li v-for="(item, idx) in log.changes" :key="idx">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Download',
  data() {
    return {
      appData: {
        versionInfo: {
          version: '0.0.0',
          updateTime: '2024-12-21',
        },
        buttons: [
          {
            id: 1,
            text: '点击下载',
            action: 'redirect',
            url: 'https://www.aurora-sky.top/download/stargate-alpha-0216.apk',
          },
        ],
        changelog: [
          {
            version: '0.0.0',
            date: '2024-03-20',
            changes: ['暂无更新内容'],
          },
        ],
      },
      loading: false,
      error: null,
    }
  },
  computed: {
    isMainlandChina() {
      // 检查当前语言是否为简体中文
      return this.$i18n.locale === 'zh-CN'
    },
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails
    },
    async translateToTraditional(text) {
      try {
        const response = await fetch('https://api.zhconvert.org/convert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: text,
            converter: 'Traditional',
          }),
        })
        const data = await response.json()
        return data.data.text
      } catch (error) {
        console.error('翻译失败:', error)
        return text
      }
    },
    async handleUpdateData(data) {
      if (!data) return

      // 获取当前日期
      const currentDate = new Date()
        .toLocaleDateString(this.$i18n.locale, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .replace(/\//g, '-')

      // 更新下载链接和版本信息
      this.appData.buttons[0].url = data.url || this.appData.buttons[0].url
      this.appData.versionInfo.version = data.version || this.appData.versionInfo.version
      this.appData.versionInfo.updateTime = currentDate

      // 更新更新日志
      if (data.description) {
        const decodedDesc = this.decodeUnicode(data.description)
        const changes = decodedDesc
          .replace(/\\r\\n/g, '\n')
          .split('\n')
          .filter((line) => line.trim())

        // 如果当前语言是繁体中文，则翻译更新内容
        const translatedChanges =
          this.$i18n.locale === 'zh-TW'
            ? await Promise.all(changes.map((change) => this.translateToTraditional(change)))
            : changes

        this.appData.changelog = [
          {
            version: data.version || this.appData.versionInfo.version,
            date: currentDate,
            changes: translatedChanges.length ? translatedChanges : ['暂无更新内容'],
          },
        ]
      }
    },
    handleAction(button) {
      if (this.loading) return

      if (button.action === 'redirect' && button.url) {
        window.location.href = button.url
      } else {
        console.error('无效操作或未指定URL')
      }
    },
    decodeUnicode(str) {
      return str.replace(/\\u([0-9a-fA-F]{4})/g, function (match, grp) {
        return String.fromCharCode(parseInt(grp, 16))
      })
    },
    async fetchAppInfo() {
      if (this.loading) return

      this.loading = true
      this.error = null

      try {
        const response = await fetch('https://multiplayer.aurora-sky.top/version.php', {
          timeout: 5000,
          headers: {
            Accept: 'application/json',
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        if (data) {
          this.handleUpdateData(data)
        } else {
          throw new Error('Invalid data format')
        }
      } catch (error) {
        console.error('获取应用信息失败:', error)
        this.error = error.message
      } finally {
        this.loading = false
      }
    },
  },
  mounted() {
    if (!this.hasShownInitialModal && this.isMainlandChina) {
      this.showDetails = true
      this.hasShownInitialModal = true
    }
    this.fetchAppInfo()
  },
  watch: {
    '$i18n.locale': {
      async handler(newLocale) {
        // 如果有现有的更新日志数据，则重新翻译
        if (
          this.appData.changelog[0].changes.length > 0 &&
          this.appData.changelog[0].changes[0] !== '暂无更新内容'
        ) {
          const changes = this.appData.changelog[0].changes

          // 如果切换到繁体中文，翻译内容
          if (newLocale === 'zh-TW') {
            const translatedChanges = await Promise.all(
              changes.map((change) => this.translateToTraditional(change)),
            )
            this.appData.changelog[0].changes = translatedChanges
          } else if (newLocale === 'zh-CN') {
            // 如果切换到简体中文，重新获取原始数据
            await this.fetchAppInfo()
          }
        }
      },
      immediate: true,
    },
  },
}
</script>

<style scoped>
@import '../assets/styles/download.css';
</style>
