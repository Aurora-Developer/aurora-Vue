<template>
  <div class="background"></div>

  <div class="floating-circles">
    <div class="circle"></div>

    <div class="circle"></div>

    <div class="circle"></div>
  </div>

  <main class="main-content">
    <div class="content-container">
      <!-- App Logo -->

      <div class="logo-container">
        <img src="https://www.aurora-sky.top/icon.png" alt="App Logo" class="app-logo" />
      </div>

      <!-- App 名称 -->

      <h1 class="app-title">深空我的世界盒子</h1>

      <!-- App 简介 -->

      <p class="app-desc">Minecraft综合社区&辅助工具</p>

      <!-- 下载按钮 -->

      <div class="btn-container">
        <a onclick="downloadApp()" class="download-btn">点击下载</a>
      </div>

      <!-- 版本信息 -->

      <div class="version-info">
        <p>当前版本：<span id="versionNumber">加载中...</span></p>

        <p>更新时间：<span id="updateTime"></span></p>
      </div>

      <!-- 更新日志 -->

      <div class="log-container">
        <p class="log-title">更新日志：</p>

        <div id="updateLog" class="update-log">加载中...</div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'Download',
}
</script>
<style src="..\assets\styles\download.css"></style>
