<template>
  <div>
    <div
      class="modal glass"
      id="cookies-btn"
      :style="{ bottom: cookiesBottom }"
      v-if="!isCookiesAccepted"
    >
      <h3 class="title">Cookie 使用说明</h3>
      <p class="message">本网站使用 Cookie 来改善您的浏览体验</p>
      <p class="message">
        我们使用 Cookie 来：
        <ul class="cookie-list">
          <li>记住您的偏好设置</li>
          <li>分析网站流量和性能</li>
          <li>提供个性化的内容和服务</li>
        </ul>
      </p>
      <div class="options">
        <button class="btn" id="allow" @click="allowCookies">接受</button>
        <button class="btn" id="list" @click="showCookiesList">查看详情</button>
      </div>
    </div>

    <!-- Cookie 详情弹窗 -->
    <div class="modal glass cookie-details" v-if="showDetails">
      <h3 class="title">Cookie 详细信息</h3>
      <div class="cookie-intro">
        <p>Cookie 是存储在您设备上的小型文本文件，用于记住您的偏好设置和改善浏览体验。</p>
        <p>我们使用不同类型的 Cookie 来运行网站和提供服务。您可以在我们的
          <router-link to="/cookies" class="policy-link" @click="closeDetails">Cookie 政策</router-link>
          中了解更多信息。
        </p>
      </div>
      <div class="cookie-types">
        <div v-for="(cookie, index) in cookiesList" :key="index" class="cookie-item">
          <h4>{{ cookie.name }}</h4>
          <p>{{ cookie.description }}</p>
          <p class="cookie-duration">有效期：{{ cookie.duration }}</p>
        </div>
      </div>
      <button class="btn close-btn" @click="closeDetails">关闭</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cookies',
  data() {
    return {
      cookiesBottom: '-50%',
      isCookiesAccepted: false,
      showDetails: false,
      cookiesList: [
        {
          name: '必要的 Cookie',
          description: '这些 Cookie 对网站的基本功能是必需的，包括记住您的 Cookie 偏好设置。',
          duration: '会话期间'
        },
        {
          name: '功能性 Cookie',
          description: '这些 Cookie 使我们能够记住您的偏好设置，提供更好的用户体验。',
          duration: '30天'
        },
        {
          name: '分析性 Cookie',
          description: '帮助我们了解访问者如何使用网站，以便我们可以改进网站体验。',
          duration: '90天'
        }
      ]
    }
  },
  methods: {
    allowCookies() {
      this.isCookiesAccepted = true
      this.cookiesBottom = '-50%'
      localStorage.setItem('userCookies', '1')
    },
    showCookiesList() {
      this.showDetails = true
    },
    closeDetails() {
      this.showDetails = false
    }
  },
  mounted() {
    // 检查用户是否已接受 Cookies
    this.isCookiesAccepted = localStorage.getItem('userCookies') === '1'

    // 如果未接受 Cookies，则展示弹窗
    if (!this.isCookiesAccepted) {
      setTimeout(() => {
        this.cookiesBottom = '3%'
        setTimeout(() => {
          this.cookiesBottom = '0'
        }, 1600)
      }, 300)
    }
  }
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

.title {
  margin: 0 0 1rem 0;
  color: white;
}

.cookie-list {
  text-align: left;
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.cookie-list li {
  margin: 0.3rem 0;
}

.cookie-details {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  padding: 1.2rem;
}

.cookie-item {
  text-align: left;
  margin: 0.8rem 0;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

.cookie-item h4 {
  margin: 0 0 0.5rem 0;
  color: white;
}

.cookie-duration {
  font-size: 0.9rem;
  color: #ccc;
  margin: 0.5rem 0 0 0;
}

.close-btn {
  margin-top: 1rem;
}

.cookie-types {
  max-height: 60vh;
  overflow-y: auto;
  padding: 0 1rem;
}

.cookie-intro {
  color: white;
  text-align: left;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.policy-link {
  color: #4CAF50;
  text-decoration: underline;
  font-weight: bold;
}

.policy-link:hover {
  color: #45a049;
}

@media screen and (max-width: 768px) {
  .cookie-details {
    width: 95%;
    padding: 1rem;
  }

  .cookie-types {
    padding: 0 0.5rem;
  }

  .cookie-item {
    padding: 0.6rem;
  }

  .btn {
    padding: 0.3rem 2rem;
    margin-right: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .cookie-details {
    width: 98%;
    padding: 0.8rem;
  }

  .cookie-intro {
    font-size: 0.9rem;
  }

  .cookie-item h4 {
    font-size: 1rem;
  }

  .cookie-item p {
    font-size: 0.9rem;
  }
}
</style>
