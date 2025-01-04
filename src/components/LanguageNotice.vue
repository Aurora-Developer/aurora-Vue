<template>
  <Transition name="banner">
    <div v-if="isVisible" class="language-notice">
      <div class="notice-content">
        <Icon icon="material-symbols:language" class="language-icon" />
        <span>{{ $t('language.notice') }}</span>
      </div>
    </div>
  </Transition>
</template>

<script>
import { ref, onMounted, watch } from 'vue'
import { Icon } from '@iconify/vue'

export default {
  name: 'LanguageNotice',
  components: {
    Icon,
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const isVisible = ref(false)

    watch(
      () => props.modelValue,
      (newVal) => {
        if (newVal) {
          isVisible.value = true
          // 3秒后自动隐藏
          setTimeout(() => {
            isVisible.value = false
            emit('update:modelValue', false)
          }, 3000)
        }
      },
    )

    return {
      isVisible,
    }
  },
}
</script>

<style scoped>
.language-notice {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.notice-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.language-icon {
  font-size: 20px;
  color: #ff6b00;
}

/* 动画效果 */
.banner-enter-active,
.banner-leave-active {
  transition: all 0.3s ease;
}

.banner-enter-from,
.banner-leave-to {
  opacity: 0;
  transform: translate(-50%, -20px);
}
</style>
