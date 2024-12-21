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
          @click="handleAction(button.action)"
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
          更新时间：<span>{{ appData.versionInfo.updateTime }}</span>
        </p>
      </div>
    </div>
  </main>
</template>

<script>
// 引入外部数据
import { appData } from '../data/dlData'

export default {
  name: 'Download',
  data() {
    return {
      appData,
    }
  },
  methods: {
    handleAction(action) {
      if (action === 'downloadApp') {
        console.log('下载应用...')
      }
    },
  },
}
</script>

<style scoped>
@import '../assets/styles/download.css';
</style>
