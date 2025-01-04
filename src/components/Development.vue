<template>
  <div class="development-container">
    <div class="construction-box">
      <div class="icon-container">
        <IconifyIcon :icon="currentIcon" class="construction-icon" />
      </div>
      <h2 class="fade-in">{{ $t('development.title') }}</h2>
      <p class="fade-in-delay">{{ $t('development.subtitle') }}</p>
    </div>
  </div>
</template>

<script>
import { Icon as IconifyIcon } from '@iconify/vue'

export default {
  name: 'Development',
  components: {
    IconifyIcon,
  },
  data() {
    return {
      icons: ['mdi:code-braces', 'mdi:developer-board', 'mdi:application-brackets'],
      currentIconIndex: 0,
    }
  },
  computed: {
    currentIcon() {
      return this.icons[this.currentIconIndex]
    },
  },
  mounted() {
    const checkRotation = () => {
      const icon = document.querySelector('.construction-icon')
      if (icon) {
        const transform = getComputedStyle(icon).transform
        const matrix = new DOMMatrix(transform)
        const angle = Math.atan2(matrix.m32, matrix.m33) * (180 / Math.PI)

        if (
          (Math.abs(angle) > 85 && Math.abs(angle) < 95) ||
          (Math.abs(angle) > 265 && Math.abs(angle) < 275)
        ) {
          this.currentIconIndex = (this.currentIconIndex + 1) % this.icons.length
        }
      }
      requestAnimationFrame(checkRotation)
    }
    requestAnimationFrame(checkRotation)
  },
}
</script>

<style scoped>
.development-container {
  min-height: 100vh;
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: backgroundPulse 8s ease-in-out infinite;
}

.construction-box {
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

.construction-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(255, 107, 0, 0.2);
}

.icon-container {
  margin: 0 auto 30px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

.construction-icon {
  font-size: 64px;
  color: #ff6b00;
  animation: complexRotate 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  transform-style: preserve-3d;
  display: inline-block;
}

@keyframes complexRotate {
  0% {
    transform: rotateY(0deg);
  }
  /* 第一圈到垂直位置 */
  20% {
    transform: rotateY(90deg);
  }
  /* 完成第一圈 */
  45% {
    transform: rotateY(360deg);
  }
  /* 第二圈到垂直位置 */
  65% {
    transform: rotateY(450deg);
  }
  /* 完成第二圈 */
  100% {
    transform: rotateY(720deg);
  }
}

.construction-box h2 {
  color: #ff6b00;
  margin: 20px 0;
  font-size: 2em;
  text-shadow: 0 0 10px rgba(255, 107, 0, 0.3);
}

.construction-box p {
  color: #888;
  font-size: 1.2em;
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

/* 悬浮效果 */
.icon-container:hover .construction-icon {
  animation-play-state: paused;
  transform: perspective(1000px) scale(1.2) rotateY(0deg);
}
</style>
