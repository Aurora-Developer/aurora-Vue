<template>
  <div class="not-found-container">
    <div class="error-box">
      <div class="icon-container">
        <IconifyIcon icon="mdi:alert-circle" class="error-icon" />
      </div>
      <h1 class="fade-in">404</h1>
      <h2 class="fade-in">页面未找到</h2>
      <p class="fade-in-delay">抱歉，您访问的页面似乎已经迷路了...</p>
      <router-link to="/" class="home-button fade-in-delay">
        <IconifyIcon icon="mdi:home" class="home-icon" />
        返回首页
      </router-link>
    </div>
  </div>
</template>

<script>
import { Icon as IconifyIcon } from '@iconify/vue'

export default {
  name: 'NotFound',
  components: {
    IconifyIcon,
  },
}
</script>

<style scoped>
.not-found-container {
  min-height: 100vh;
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: backgroundPulse 8s ease-in-out infinite;
}

.error-box {
  text-align: center;
  color: #fff;
  padding: 60px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(255, 107, 0, 0.1);
  border: 1px solid rgba(255, 107, 0, 0.1);
  transform: translateY(0);
  transition: all 0.3s ease;
}

.error-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(255, 107, 0, 0.2);
}

.icon-container {
  margin: 0 auto 20px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.error-icon {
  font-size: 64px;
  color: #ff6b00;
  animation: pulse 2s ease-in-out infinite;
}

.error-box h1 {
  font-size: 6em;
  margin: 0;
  background: linear-gradient(45deg, #ff6b00, #ff9800);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(255, 107, 0, 0.3);
}

.error-box h2 {
  color: #ff6b00;
  margin: 10px 0;
  font-size: 2em;
}

.error-box p {
  color: #888;
  font-size: 1.2em;
  margin: 20px 0;
}

.home-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ff6b00;
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
}

.home-button:hover {
  background: #ff9800;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(255, 107, 0, 0.3);
}

.home-icon {
  font-size: 20px;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

@keyframes backgroundPulse {
  0%,
  100% {
    background-color: #1a1a1a;
  }
  50% {
    background-color: #1f1f1f;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.fade-in-delay {
  opacity: 0;
  animation: fadeIn 1s ease-out 0.5s forwards;
}
</style>
