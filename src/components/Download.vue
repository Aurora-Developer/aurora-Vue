<template>
  <div class="background"></div>

  <!-- 主内容区域 -->
  <main class="main-content">
    <div class="content-container">
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
          @click="handleAction(button)"
        >
          {{ button.text }}
        </a>
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

    <!-- 新增的更新日志区域（垂直排列） -->
    <div class="changelog-container">
      <h2 class="changelog-title">更新日志</h2>
      <div class="changelog-content">
        <div v-for="(log, index) in appData.changelog" :key="index" class="changelog-item">
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
        title: '深空我的世界盒子',
        description: 'Minecraft综合社区&辅助工具',
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
            changes: ['', '', ''],
          },
        ],
      },
    }
  },
  methods: {
    handleAction(button) {
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
        .replace(/\//g, '-') // 将 2024/03/21 格式转换为 2024-03-21

      // 更新下载链接和版本信息
      this.appData.buttons[0].url = data.url || this.appData.buttons[0].url
      this.appData.versionInfo.version = data.version || this.appData.versionInfo.version
      this.appData.versionInfo.updateTime = currentDate // 使用当前日期

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
            date: currentDate, // 使用当前日期
            changes: changes,
          },
        ]
      }
    },
  },
  mounted() {
    fetch('https://api.aurora-sky.top/update.php', {
      timeout: 5000,
    })
      .then((response) => response.json())
      .then((data) => {
        this.handleUpdateData(data)
      })
      .catch((error) => {
        console.warn('数据获取失败:', error)
      })
  },
}
</script>

<style scoped>
@import '../assets/styles/download.css';
</style>
