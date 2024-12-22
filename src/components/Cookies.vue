<template>
  <div
    class="modal glass"
    id="cookies-btn"
    :style="{ bottom: cookiesBottom }"
    v-if="!isCookiesAccepted"
  >
    <p class="message">This Website Uses Cookies</p>
    <p class="message">
      Cookies are small data files to improve your experience, such as saving your preferences.
    </p>
    <div class="options">
      <button class="btn" id="allow" @click="allowCookies">Allow</button>
      <button class="btn" id="list" @click="showCookiesList">Cookies List</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cookies',
  data() {
    return {
      cookiesBottom: '-50%', // 控制弹窗初始位置
      isCookiesAccepted: false, // 用户是否已接受 Cookies
    }
  },
  mounted() {
    // 检查用户是否已接受 Cookies
    this.isCookiesAccepted = localStorage.getItem('userCookies') === '1'

    // 如果未接受 Cookies，则展示弹窗
    if (!this.isCookiesAccepted) {
      setTimeout(() => {
        this.cookiesBottom = '3%' // 弹出显示
        setTimeout(() => {
          this.cookiesBottom = '0' // 动画完成
        }, 1600)
      }, 300)
    }
  },
  methods: {
    allowCookies() {
      // 用户点击“Allow”，隐藏弹窗并存储状态
      this.isCookiesAccepted = true
      this.cookiesBottom = '-50%' // 弹窗滑回隐藏
      localStorage.setItem('userCookies', '1') // 存储用户状态
    },
    showCookiesList() {
      // 用户点击“Cookies List”，触发查看逻辑
      alert('Displaying cookies list...')
    },
  },
}
</script>

<style scoped>
.modal {
  position: fixed;
  left: 50%;
  bottom: -50%; /* 初始隐藏位置 */
  transform: translate(-50%, 0);
  width: auto;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 3rem;
  border: 3px solid black;
  border-radius: 5px;
  background: rgba(55, 55, 55, 0.6);
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
  z-index: 3;
  transition: all 2s; /* 平滑动画 */
}

.message {
  font-size: 1.1rem;
  margin-bottom: 1.6rem;
  margin-top: 0;
}

.options {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.btn {
  color: black;
  font-weight: bold;
  font-family: inherit;
  font-size: inherit;
  background: white;
  padding: 0.3rem 3.4rem;
  border: 3px solid black;
  margin-right: 2.6rem;
  box-shadow: 0 0 0 black;
  transition: all 0.2s ease;
}

.btn:last-child {
  margin-right: 0;
}

.btn:hover {
  box-shadow: 0.4rem 0.4rem 0 black;
  transform: translate(-0.4rem, -0.4rem);
}

.btn:active {
  box-shadow: 0 0 0 black;
  transform: translate(0, 0);
}
</style>
