<template>
  <div class="background"></div>
  <div class="background-overlay"></div>

  <!-- 页面通知横幅 -->
  <div class="notice-container" aria-live="polite">
    <!-- 所有用户都显示的法律声明 -->
    <p class="notice" aria-label="商标声明">{{ $t('download.notice.trademark') }}</p>

    <!-- 仅中国大陆用户显示的特别提示 -->
    <p class="notice" v-if="isMainlandChina" aria-label="版本支持说明">
      {{ $t('download.notice.main') }}
      <span
        class="details-toggle"
        @click="showDetails = true"
        role="button"
        tabindex="0"
        aria-haspopup="dialog"
        >{{ $t('download.notice.viewDetails') }}</span
      >
    </p>

    <!-- 弹窗组件 -->
    <div
      v-if="showDetails && isMainlandChina"
      class="modal-overlay"
      @click.self="showDetails = false"
      role="dialog"
      aria-labelledby="modal-title"
      aria-modal="true"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h3 id="modal-title">{{ $t('download.modal.title') }}</h3>
          <span
            class="modal-close"
            @click="showDetails = false"
            role="button"
            tabindex="0"
            aria-label="关闭弹窗"
            >&times;</span
          >
        </div>
        <div class="modal-body">
          <p>{{ $t('download.modal.content.p1') }}</p>
          <p>{{ $t('download.modal.content.p2') }}</p>
          <p>{{ $t('download.modal.content.p3') }}</p>
          <p>{{ $t('download.modal.content.p4') }}</p>
          <p>{{ $t('download.modal.content.p5') }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- 主内容区域 -->
  <main class="main-content">
    <!-- 页面说明 -->
    <div class="page-description scroll-reveal">
      <h1 class="page-title">{{ $t('download.pageTitle', '应用下载中心') }}</h1>
      <p class="page-desc">
        {{
          $t(
            'download.pageDescription',
            '在此页面，您可以下载我们提供的多款应用程序，包括深空我的世界盒子与深空我的世界联机工具',
          )
        }}
      </p>
    </div>

    <!-- 主应用下载区域 -->
    <div class="content-container scroll-reveal">
      <!-- App Logo -->
      <div class="logo-container">
        <img src="../assets/images/icon.png" alt="App Logo" class="app-logo" />
      </div>

      <!-- App 名称 -->
      <h2 class="app-title">{{ $t('download.title') }}</h2>

      <!-- App 简介 -->
      <p class="app-desc">{{ $t('download.description') }}</p>

      <!-- 下载按钮 -->
      <div class="btn-container">
        <a
          v-for="button in auroraAppData.buttons"
          :key="button.id"
          class="download-btn"
          :class="{ loading: auroraLoading, 'error-btn': auroraError }"
          @click="showLicenseBeforeDownload(button)"
          role="button"
          tabindex="0"
          :aria-label="
            auroraLoading ? $t('download.button.loading') : $t('download.button.download')
          "
        >
          {{ auroraLoading ? $t('download.button.loading') : $t('download.button.download') }}
        </a>
      </div>

      <!-- 法律声明和许可协议 -->
      <div class="legal-notice" v-if="!auroraLoading && !auroraError">
        <p>{{ $t('download.legal.disclaimer') }}</p>
        <p>
          {{ $t('download.legal.license') }}
          <a href="#" @click.prevent="showLicenseAgreement = true" class="license-link">
            {{ $t('download.legal.viewLicense') }}
          </a>
        </p>
      </div>

      <!-- 错误提示 -->
      <div v-if="auroraError" class="error-message" role="alert">
        <span class="error-icon">⚠️</span>
        {{ $t('download.error.fetch', '下载信息获取失败') }}: {{ formatErrorMessage(auroraError) }}
        <button class="retry-btn" @click="fetchAuroraAppInfo">
          {{ $t('download.button.retry', '重试') }}
        </button>
      </div>

      <!-- 版本信息 -->
      <div class="version-info">
        <p>
          {{ $t('download.version.current') }}<span>{{ auroraAppData.versionInfo.version }}</span>
        </p>
        <p>
          {{ $t('download.version.updateTime')
          }}<span>{{ auroraAppData.versionInfo.updateTime }}</span>
        </p>
        <p v-if="auroraAppData.downloadCount">
          {{ $t('download.version.downloadCount')
          }}<span>{{ formatDownloadCount(auroraAppData.downloadCount) }}</span>
        </p>
      </div>
    </div>

    <!-- 更新日志区域 -->
    <div class="changelog-container scroll-reveal" id="changelog">
      <h2 class="changelog-title">{{ $t('download.changelog.title') }}</h2>
      <div class="changelog-content">
        <div
          v-for="(log, index) in auroraAppData.changelog"
          :key="index"
          class="changelog-item scroll-reveal"
        >
          <h3>
            {{ log.version }} <span class="changelog-date">{{ log.date }}</span>
          </h3>
          <ul>
            <li v-for="(item, idx) in log.changes" :key="idx">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 分隔线 -->
    <div class="section-divider scroll-reveal"></div>

    <!-- Stargate应用下载区域 -->
    <div class="content-container scroll-reveal">
      <!-- App Logo -->
      <div class="logo-container">
        <img src="../assets/images/Stargate.png" alt="App Logo" class="app-logo" />
      </div>

      <!-- App 名称 -->
      <h2 class="app-title">{{ $t('downloadStargate.title') }}</h2>

      <!-- App 简介 -->
      <p class="app-desc">{{ $t('downloadStargate.description') }}</p>

      <!-- 下载按钮 -->
      <div class="btn-container">
        <a
          v-for="button in stargateAppData.buttons"
          :key="button.id"
          class="download-btn"
          :class="{ loading: stargateLoading, 'error-btn': stargateError }"
          @click="showLicenseBeforeDownload(button)"
          role="button"
          tabindex="0"
          :aria-label="
            stargateLoading ? $t('download.button.loading') : $t('download.button.download')
          "
        >
          {{ stargateLoading ? $t('download.button.loading') : $t('download.button.download') }}
        </a>
      </div>

      <!-- 法律声明和许可协议 -->
      <div class="legal-notice" v-if="!stargateLoading && !stargateError">
        <p>{{ $t('download.legal.disclaimer') }}</p>
        <p>
          {{ $t('download.legal.license') }}
          <a href="#" @click.prevent="showLicenseAgreement = true" class="license-link">
            {{ $t('download.legal.viewLicense') }}
          </a>
        </p>
      </div>

      <!-- 错误提示 -->
      <div v-if="stargateError" class="error-message" role="alert">
        <span class="error-icon">⚠️</span>
        {{ $t('download.error.fetch', '下载信息获取失败') }}:
        {{ formatErrorMessage(stargateError) }}
        <button class="retry-btn" @click="fetchStargateAppInfo">
          {{ $t('download.button.retry', '重试') }}
        </button>
      </div>

      <!-- 版本信息 -->
      <div class="version-info">
        <p>
          {{ $t('download.version.current') }}<span>{{ stargateAppData.versionInfo.version }}</span>
        </p>
        <p>
          {{ $t('download.version.updateTime')
          }}<span>{{ stargateAppData.versionInfo.updateTime }}</span>
        </p>
        <p v-if="stargateAppData.downloadCount">
          {{ $t('download.version.downloadCount')
          }}<span>{{ formatDownloadCount(stargateAppData.downloadCount) }}</span>
        </p>
      </div>
    </div>

    <!-- 更新日志区域 -->
    <div class="changelog-container scroll-reveal">
      <h2 class="changelog-title">{{ $t('download.changelog.title') }}</h2>
      <div class="changelog-content">
        <div
          v-for="(log, index) in stargateAppData.changelog"
          :key="index"
          class="changelog-item scroll-reveal"
        >
          <h3>
            {{ log.version }} <span class="changelog-date">{{ log.date }}</span>
          </h3>
          <ul>
            <li v-for="(item, idx) in log.changes" :key="idx">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </main>

  <!-- 许可协议弹窗 -->
  <div
    v-if="showLicenseAgreement"
    class="modal-overlay"
    @click.self="showLicenseAgreement = false"
    role="dialog"
    aria-labelledby="license-title"
    aria-modal="true"
  >
    <div class="modal-content license-modal">
      <div class="modal-header">
        <h3 id="license-title">{{ $t('download.legal.licenseTitle') }}</h3>
        <span
          class="modal-close"
          @click="showLicenseAgreement = false"
          role="button"
          tabindex="0"
          aria-label="关闭弹窗"
          >&times;</span
        >
      </div>
      <div class="modal-body">
        <div class="license-content">
          <h4>{{ $t('download.legal.termsOfUse') }}</h4>
          <p>{{ $t('download.legal.licenseContent.p1') }}</p>
          <p>{{ $t('download.legal.licenseContent.p2') }}</p>
          <p>{{ $t('download.legal.licenseContent.p3') }}</p>
          <h4>{{ $t('download.legal.privacyPolicy') }}</h4>
          <p>{{ $t('download.legal.licenseContent.p4') }}</p>
          <p>{{ $t('download.legal.licenseContent.p5') }}</p>
          <h4>{{ $t('download.legal.thirdParty') }}</h4>
          <p>{{ $t('download.legal.licenseContent.p6') }}</p>
        </div>
      </div>
      <div class="modal-footer">
        <button @click="rejectLicense" class="license-reject-btn">
          {{ $t('download.legal.reject') }}
        </button>
        <button @click="acceptLicense" class="license-agree-btn">
          {{ $t('download.legal.agree') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Downloads',
  data() {
    return {
      // Aurora应用数据
      auroraAppData: {
        versionInfo: {
          version: '0.0.0',
          updateTime: '2024-12-21',
        },
        buttons: [
          {
            id: 1,
            text: '点击下载',
            action: 'redirect',
            url: 'https://www.aurora-sky.top/download/app-release-alpha-1-2.apk',
          },
        ],
        // 下载统计
        downloadCount: 0,
        changelog: [
          {
            version: '0.0.0',
            date: '2024-03-20',
            changes: ['暂无更新内容'],
          },
        ],
      },
      auroraLoading: false,
      auroraError: null,

      // Stargate应用数据
      stargateAppData: {
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
        // 下载统计
        downloadCount: 0,
        changelog: [
          {
            version: '0.0.0',
            date: '2024-03-20',
            changes: ['暂无更新内容'],
          },
        ],
      },
      stargateLoading: false,
      stargateError: null,

      // 通用数据
      showDetails: false,
      hasShownInitialModal: false,
      showLicenseAgreement: false,
      pendingDownloadButton: null,
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
    formatErrorMessage(error) {
      // 格式化错误消息，使其更友好
      if (error.includes('timeout') || error.includes('请求超时')) {
        return this.$t('download.error.timeout', '请求超时，请检查网络连接')
      } else if (error.includes('network') || error.includes('网络错误')) {
        return this.$t('download.error.network', '网络错误，请检查网络连接')
      } else {
        return this.$t('download.error.default', '无法获取下载信息，请稍后再试')
      }
    },
    // 格式化下载数字
    formatDownloadCount(count) {
      if (!count) return '0'

      const num = parseInt(count)
      if (isNaN(num)) return '0'

      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M+'
      } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K+'
      }
      return num.toString()
    },
    // 统一的应用数据更新函数，减少代码重复
    async updateAppData(data, appType) {
      if (!data) return false

      const isAurora = appType === 'aurora'
      const appData = isAurora ? this.auroraAppData : this.stargateAppData

      // 获取当前日期
      const currentDate = new Date()
        .toLocaleDateString(this.$i18n.locale, {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .replace(/\//g, '-')

      // 更新下载链接和版本信息
      appData.buttons[0].url = data.url || appData.buttons[0].url
      appData.versionInfo.version = data.version || appData.versionInfo.version
      appData.versionInfo.updateTime = currentDate

      // 更新下载次数
      if (data.downloadCount) {
        appData.downloadCount = data.downloadCount
      }

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

        appData.changelog = [
          {
            version: data.version || appData.versionInfo.version,
            date: currentDate,
            changes: translatedChanges.length ? translatedChanges : ['暂无更新内容'],
          },
        ]
      }

      return true
    },
    async handleUpdateAuroraData(data) {
      return this.updateAppData(data, 'aurora')
    },
    async handleUpdateStargateData(data) {
      return this.updateAppData(data, 'stargate')
    },
    // 在下载前显示许可协议
    showLicenseBeforeDownload(button) {
      if (this.auroraLoading || this.stargateLoading) return

      // 保存当前待下载的按钮
      this.pendingDownloadButton = button

      // 显示许可协议弹窗
      this.showLicenseAgreement = true
    },

    // 接受许可协议并继续下载
    acceptLicense() {
      if (this.pendingDownloadButton) {
        this.handleAction(this.pendingDownloadButton)
        this.pendingDownloadButton = null
      }
      this.showLicenseAgreement = false
    },

    // 拒绝许可协议
    rejectLicense() {
      this.pendingDownloadButton = null
      this.showLicenseAgreement = false
    },
    handleAction(button) {
      if (button.action === 'redirect' && button.url) {
        // 添加下载点击事件跟踪
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'download', {
            event_category: 'app_download',
            event_label: button.url,
          })
        }

        // 增加本地下载计数
        const appData = button.url.includes('stargate') ? this.stargateAppData : this.auroraAppData
        if (appData.downloadCount) {
          appData.downloadCount++
        }

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
    async fetchAuroraAppInfo() {
      if (this.auroraLoading) return

      this.auroraLoading = true
      this.auroraError = null

      try {
        const response = await fetch('https://api.aurora-sky.top/update.php', {
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
          await this.handleUpdateAuroraData(data)
        } else {
          throw new Error('Invalid data format')
        }
      } catch (error) {
        console.error('获取Aurora应用信息失败:', error)
        this.auroraError = error.message
      } finally {
        this.auroraLoading = false
      }
    },
    async fetchStargateAppInfo() {
      if (this.stargateLoading) return

      this.stargateLoading = true
      this.stargateError = null

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
          await this.handleUpdateStargateData(data)
        } else {
          throw new Error('Invalid data format')
        }
      } catch (error) {
        console.error('获取Stargate应用信息失败:', error)
        this.stargateError = error.message
      } finally {
        this.stargateLoading = false
      }
    },
    // 添加延迟加载数据的方法，避免同时发起两个请求
    async fetchAppData() {
      try {
        await this.fetchAuroraAppInfo()
        // 等待第一个请求完成后再发起第二个请求
        await this.fetchStargateAppInfo()
      } catch (error) {
        console.error('获取应用数据失败:', error)
      }
    },
    // 添加回到顶部功能
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
  mounted() {
    // 只有当用户是中国大陆地区且没有显示过弹窗时，才显示弹窗
    if (this.isMainlandChina && !this.hasShownInitialModal) {
      this.showDetails = true
      this.hasShownInitialModal = true
    }

    // 使用延迟加载方法获取应用数据
    this.fetchAppData()

    // 添加键盘事件监听，支持ESC键关闭弹窗
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.showDetails) {
          this.showDetails = false
        }
        if (this.showLicenseAgreement) {
          this.showLicenseAgreement = false
          this.pendingDownloadButton = null
        }
      }
    })
  },
  beforeUnmount() {
    // 清理事件监听器
    document.removeEventListener('keydown', () => {})
  },
  watch: {
    '$i18n.locale': {
      async handler(newLocale) {
        // 如果有现有的更新日志数据，则重新翻译
        // Aurora应用
        if (
          this.auroraAppData.changelog[0].changes.length > 0 &&
          this.auroraAppData.changelog[0].changes[0] !== '暂无更新内容'
        ) {
          const changes = this.auroraAppData.changelog[0].changes

          // 如果切换到繁体中文，翻译内容
          if (newLocale === 'zh-TW') {
            const translatedChanges = await Promise.all(
              changes.map((change) => this.translateToTraditional(change)),
            )
            this.auroraAppData.changelog[0].changes = translatedChanges
          } else if (newLocale === 'zh-CN') {
            // 如果切换到简体中文，重新获取原始数据
            await this.fetchAuroraAppInfo()
          }
        }

        // Stargate应用
        if (
          this.stargateAppData.changelog[0].changes.length > 0 &&
          this.stargateAppData.changelog[0].changes[0] !== '暂无更新内容'
        ) {
          const changes = this.stargateAppData.changelog[0].changes

          // 如果切换到繁体中文，翻译内容
          if (newLocale === 'zh-TW') {
            const translatedChanges = await Promise.all(
              changes.map((change) => this.translateToTraditional(change)),
            )
            this.stargateAppData.changelog[0].changes = translatedChanges
          } else if (newLocale === 'zh-CN') {
            // 如果切换到简体中文，重新获取原始数据
            await this.fetchStargateAppInfo()
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

/* 添加分隔线样式 */
.section-divider {
  width: 80%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
  margin: 60px auto;
}

/* 确保每个下载区域有足够的间距 */
.content-container {
  margin-bottom: 30px;
}

/* 页面说明样式 */
.page-description {
  text-align: center;
  color: #ffffff;
  margin-bottom: 40px;
  padding: 0 20px;
}

.page-title {
  font-size: 32px;
  margin-bottom: 15px;
  background: linear-gradient(135deg, #ff8c00, #ff6200);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.page-desc {
  color: #b0b0b0;
  font-size: 18px;
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto;
}

/* 错误按钮样式 */
.download-btn.error-btn {
  background: linear-gradient(135deg, #e55, #c33);
}

/* 重试按钮样式 */
.retry-btn {
  background: transparent;
  border: 1px solid #b0b0b0;
  color: #b0b0b0;
  padding: 5px 10px;
  border-radius: 4px;
  margin-left: 10px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.retry-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: #fff;
  color: #fff;
}

/* 错误消息增强 */
.error-message {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0;
  padding: 10px;
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  border-radius: 6px;
}

.error-icon {
  margin-right: 10px;
  font-size: 18px;
}

/* 更新日志日期样式 */
.changelog-date {
  font-size: 14px;
  color: #b0b0b0;
  font-weight: normal;
  margin-left: 10px;
}

/* 添加响应式设计调整 */
@media (max-width: 768px) {
  .btn-container {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .download-btn {
    width: 100%;
    max-width: 80%;
    padding: 15px 20px;
    box-sizing: border-box;
    text-align: center;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .page-title {
    font-size: 28px;
  }

  .page-desc {
    font-size: 16px;
  }

  .modal-content {
    width: 90%;
    padding: 15px;
  }
}

/* 下载计数高亮 */
.version-info p:last-child span {
  color: #ff8c00;
  font-weight: 600;
}

/* 法律声明样式 */
.legal-notice {
  margin: 20px 0;
  font-size: 12px;
  color: #888;
  text-align: center;
  max-width: 90%;
}

.legal-notice p {
  margin: 5px 0;
  line-height: 1.4;
}

.license-link {
  color: #ff8c00;
  text-decoration: underline;
  cursor: pointer;
}

.license-link:hover {
  color: #ff9d33;
}

/* 许可协议弹窗样式 */
.license-modal {
  max-width: 800px;
  max-height: 80vh;
}

.license-content {
  max-height: 50vh;
  overflow-y: auto;
  padding: 0 10px;
}

.license-content h4 {
  color: #ff8c00;
  margin: 20px 0 10px;
}

.license-content p {
  margin: 10px 0;
  font-size: 14px;
  line-height: 1.6;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  border-top: 1px solid rgba(255, 140, 0, 0.2);
  margin-top: 15px;
}

.license-agree-btn {
  background: linear-gradient(135deg, #ff8c00, #ff6200);
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  min-width: 150px;
}

.license-agree-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(255, 140, 0, 0.3);
}

.license-reject-btn {
  background: transparent;
  color: #b0b0b0;
  border: 1px solid #b0b0b0;
  padding: 10px 25px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  min-width: 150px;
}

.license-reject-btn:hover {
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  border-color: #ffffff;
}

@media (max-width: 600px) {
  .modal-footer {
    flex-direction: column-reverse;
    gap: 10px;
  }

  .license-agree-btn,
  .license-reject-btn {
    width: 100%;
  }
}

/* 下载按钮 */
.btn-container {
  margin: 20px 0 30px;
  display: flex;
  justify-content: center;
  width: 100%;
}

.download-btn {
  display: inline-block;
  background: linear-gradient(135deg, #ff8c00, #ff6200);
  color: #ffffff;
  padding: 15px 40px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(255, 140, 0, 0.3);
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  text-align: center;
}
</style>
