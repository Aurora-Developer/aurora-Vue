<template>
  <div class="background"></div>
  <div class="background-overlay"></div>

  <!-- 页面通知横幅 -->
  <div class="notice-container">
    <p class="notice">
      深空 Aurora 不支持 <i>Minecraft</i> 游戏开发商 Mojang Studios
      在中国大陆地区的代理版本《我的世界》， 且不对该版本提供任何形式的功能支持
      <span class="details-toggle" @click="showDetails = true">查看详情</span>
    </p>

    <!-- 弹窗组件 -->
    <div v-if="showDetails" class="modal-overlay" @click.self="showDetails = false">
      <div class="modal-content">
        <div class="modal-header">
          <h3>版本支持说明</h3>
          <span class="modal-close" @click="showDetails = false">&times;</span>
        </div>
        <div class="modal-body">
          <p>
            作为一个基于 WebSocket 协议开发的第三方工具，深空 Aurora 仅针对 Minecraft
            基岩版进行开发和优化。我们<span class="highlight-text">不会</span
            >对中国大陆地区代理版本进行任何形式的开发和适配。
          </p>

          <p>
            深空 Aurora 在中国大陆地区代理版本中可能表现出一定的<span class="highlight-text"
              >兼容性</span
            >（这源于游戏底层架构的相似性）， 但我们对其运行的有效性和稳定性不承担任何责任。
          </p>

          <p>我们<span class="highlight-text">明确声明</span>：</p>
          <p>1. 不推荐用户在中国大陆地区代理版本中使用深空 Aurora；</p>
          <p>2. 不对使用该版本可能造成的任何影响承担责任。</p>
        </div>
      </div>
    </div>

    <p class="notice">
      <i>Minecraft</i> ® 是 Microsoft Corporation 的注册商标。深空 Aurora 是独立开发的第三方工具，
      与 Mojang Studios、Microsoft 及其在中国大陆地区的授权代理商均无任何关联
    </p>
  </div>

  <!-- 主内容区域 -->
  <main class="main-content">
    <div class="content-container scroll-reveal">
      <!-- App Logo -->
      <div class="logo-container">
        <img src="https://www.aurora-sky.top/icon.png" alt="App Logo" class="app-logo" />
      </div>

      <!-- 动态生成 App 名称 -->
      <h1 class="app-title">{{ appData.title }}</h1>

      <!-- 动态生成 App 简介 -->
      <p class="app-desc">{{ appData.description }}</p>

      <!-- 动态生成按钮 -->
      <div class="btn-container">
        <a
          v-for="button in appData.buttons"
          :key="button.id"
          class="download-btn"
          :class="{ loading: loading }"
          @click="handleAction(button)"
        >
          {{ loading ? '加载中...' : button.text }}
        </a>
      </div>

      <!-- 错误提示 -->
      <div v-if="error" class="error-message">
        {{ error }}
      </div>

      <!-- 动态生成版本信息 -->
      <div class="version-info">
        <p>
          当前版本：<span>{{ appData.versionInfo.version }}</span>
        </p>
        <p>
          同步数据时间：<span>{{ appData.versionInfo.updateTime }}</span>
        </p>
      </div>
    </div>

    <!-- 更新日志区域 -->
    <div class="changelog-container scroll-reveal" id="changelog">
      <h2 class="changelog-title">更新日志</h2>
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
      showDetails: false,
      hasShownInitialModal: false,
      appData: {
        title: '深空我的世界盒子',
        description: '适用于 Minecraft 的综合社区&辅助工具',
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
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails
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
    handleUpdateData(data) {
      if (!data) return

      // 获取当前日期
      const currentDate = new Date()
        .toLocaleDateString('zh-CN', {
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

        this.appData.changelog = [
          {
            version: data.version || this.appData.versionInfo.version,
            date: currentDate,
            changes: changes.length ? changes : ['暂无更新内容'],
          },
        ]
      }
    },
    async fetchAppInfo() {
      if (this.loading) return

      this.loading = true
      this.error = null

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
    if (!this.hasShownInitialModal) {
      this.showDetails = true
      this.hasShownInitialModal = true
    }
    this.fetchAppInfo()
  },
}
</script>

<style scoped>
@import '../assets/styles/download.css';
</style>
