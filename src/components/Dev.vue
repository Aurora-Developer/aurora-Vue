<template>
  <div class="iframe-wrapper">
    <div class="iframe-top-space"></div>
    <div class="iframe-container">
      <div v-show="isLoading" class="loading-overlay">
        <div class="loading-bar"></div>
      </div>
      <iframe
        src="https://dev.aurora-sky.top/"
        frameborder="0"
        allowfullscreen
        @load="isLoading = false"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dev',
  data() {
    return {
      isLoading: true,
    }
  },
}
</script>

<style scoped>
.iframe-wrapper {
  width: 100%;
}

.iframe-top-space {
  height: 60px;
  background: rgba(18, 18, 20, 0.95);
  border-bottom: 1px solid rgba(255, 140, 0, 0.1);
}

.iframe-container {
  width: 100%;
  height: calc(100vh - 60px);
  overflow: hidden;
  position: relative;
  background: rgba(18, 18, 20, 0.95);
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(18, 18, 20, 0.98);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  transition: opacity 0.3s ease;
}

.loading-bar {
  position: relative;
  width: 64px;
  height: 64px;
  transform-style: preserve-3d;
  transform: rotateX(-33.5deg) rotateY(45deg);
  animation: minecraft-rotate 2s infinite linear;
}

.loading-bar::before,
.loading-bar::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 4px solid rgba(255, 140, 0, 0.8);
  animation: minecraft-pulse 1.5s infinite ease-in-out;
}

.loading-bar::before {
  transform: rotateX(90deg);
  animation-delay: -0.5s;
}

.loading-bar::after {
  transform: rotateY(90deg);
  animation-delay: -1s;
}

@keyframes minecraft-rotate {
  0% {
    transform: rotateX(-33.5deg) rotateY(45deg);
  }
  100% {
    transform: rotateX(-33.5deg) rotateY(405deg);
  }
}

@keyframes minecraft-pulse {
  0%,
  100% {
    border-width: 4px;
    opacity: 0.5;
  }
  50% {
    border-width: 8px;
    opacity: 1;
  }
}

iframe {
  width: 100%;
  height: 100%;
  border: none;
  position: relative;
  z-index: 0;
  transition: opacity 0.3s ease;
}
</style>
