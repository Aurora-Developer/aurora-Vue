<template>
  <div class="cookies-container">
    <div class="cookies-content">
      <div class="header-section">
        <div class="icon">
          <Icon icon="material-symbols:cookie" class="icon" />
        </div>

        <h1>Cookie 政策</h1>
      </div>

      <div class="content">
        <div class="cookie-info-box">
          <div class="cookie-icon">
            <Icon icon="material-symbols:cookie-outline" width="48" height="48" />
          </div>

          <p class="cookie-intro">
            Cookie 能帮助我们提供更好的服务体验。继续使用我们的网站，即表示您同意我们使用 Cookie。
          </p>
        </div>

        <section>
          <h2>1. Cookie 简介</h2>

          <p>
            Cookie
            是在您访问网站时存储在您设备上的小型文本文件。这些文件包含可帮助我们识别您的浏览器和某些偏好的信息。
          </p>
        </section>

        <section>
          <h2>2. 我们如何使用 Cookie</h2>

          <p>我们使用 Cookie 来：</p>

          <ul>
            <li>记住您的登录状态和个人偏好设置</li>

            <li>了解您如何使用我们的网站，以便我们可以改进用户体验</li>

            <li>为您提供个性化的内容和推荐</li>

            <li>分析我们网站的性能和流量</li>
          </ul>
        </section>

        <section>
          <h2>3. Cookie 类型</h2>

          <p>我们使用以下类型的 Cookie：</p>

          <ul>
            <li><strong>必要性 Cookie：</strong>这些 Cookie 对于网站的基本功能是必需的</li>

            <li><strong>功能性 Cookie：</strong>这些 Cookie 使我们能够记住您的偏好设置</li>

            <li>
              <strong>分析性 Cookie：</strong>这些 Cookie 帮助我们了解访问者如何使用我们的网站
            </li>

            <li><strong>广告 Cookie：</strong>这些 Cookie 用于向您展示相关广告</li>
          </ul>
        </section>

        <section>
          <h2>4. Cookie 管理</h2>

          <p>您可以通过以下方式管理 Cookie：</p>

          <ul>
            <li>在浏览器设置中更改 Cookie 首选项</li>

            <li>使用浏览器的隐私模式</li>

            <li>使用第三方 Cookie 管理工具</li>
          </ul>

          <p>请注意，禁用某些 Cookie 可能会影响网站的功能。</p>
        </section>

        <section>
          <h2>5. 更新说明</h2>

          <p>
            我们可能会不时更新此 Cookie
            政策。任何更改都将在此页面上发布，如有重大更改，我们将通过适当的方式通知您。
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
  name: 'CookiesPolicy',
  components: {
    Icon,
  },
}
</script>

<style scoped>
.cookies-container {
  width: 100%;
  min-height: 100vh;
  background-color: rgb(26, 26, 26);
  padding: 50px 0 0 0;
  color: #ffffff;
}

.cookies-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.header-section {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(255, 107, 0, 0.1));
  border-radius: 8px;
}

.icon {
  font-size: 2.5rem;
  margin-right: 1rem;
  color: #ff6b00;
  background: rgba(255, 107, 0, 0.1);
  padding: 1rem;
  border-radius: 50%;
}

h1 {
  color: #ff6b00;
  margin: 0;
  font-size: 2.5rem;
}

.cookie-info-box {
  display: flex;
  align-items: center;
  background: linear-gradient(to right, rgba(255, 107, 0, 0.1), rgba(0, 0, 0, 0.3));
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 0, 0.2);
}

.cookie-icon {
  font-size: 2.5rem;
  margin-right: 1rem;
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.cookie-intro {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
}

.content {
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 0, 0.2);
}

section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

section::after {
  content: '🍪';
  position: absolute;
  right: -10px;
  bottom: -10px;
  font-size: 4rem;
  opacity: 0.1;
  transform: rotate(-15deg);
}

h2 {
  color: #ff6b00;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
}

h2::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 1.2em;
  background: #ff6b00;
  margin-right: 0.5rem;
  border-radius: 2px;
}

p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

ul {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  list-style-type: none;
}

li {
  line-height: 1.6;
  margin-bottom: 0.5rem;
  position: relative;
}

li::before {
  content: '🍪';
  position: absolute;
  left: -1.5rem;
  font-size: 0.8em;
}

strong {
  color: #ff6b00;
}
</style>
