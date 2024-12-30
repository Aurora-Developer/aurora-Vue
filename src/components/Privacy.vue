<template>
  <div class="privacy-container">
    <div class="privacy-content">
      <div class="header-section">
        <Icon icon="mdi:shield-lock" class="icon" />
        <h1>隐私政策</h1>
      </div>
      <div class="intro-box">
        <p class="intro-text">
          我们非常重视您的隐私保护。本隐私政策旨在帮助您了解我们如何收集、使用和保护您的个人信息。请仔细阅读以下内容。
        </p>
      </div>
      <div class="content">
        <section>
          <h2>1. 信息收集</h2>
          <p>我们收集的信息包括：</p>
          <ul>
            <li><strong>基本信息：</strong>用户名、电子邮件地址、密码等注册信息</li>
            <li><strong>使用数据：</strong>您在使用我们服务时的活动记录、偏好设置等</li>
            <li><strong>设备信息：</strong>设备类型、操作系统、浏览器类型等技术数据</li>
            <li><strong>日志数据：</strong>IP地址、访问时间、访问页面等系统自动记录的信息</li>
          </ul>
        </section>
        <section>
          <h2>2. 信息使用</h2>
          <p>我们使用收集的信息用于：</p>
          <ul>
            <li>提供、维护和改进我们的服务</li>
            <li>处理您的请求和反馈</li>
            <li>发送服务通知和更新信息</li>
            <li>防止欺诈和提高安全性</li>
            <li>进行数据分析和研究</li>
          </ul>
        </section>
        <section>
          <h2>3. 信息共享</h2>
          <p>我们不会出售您的个人信息。仅在以下情况下可能会共享您的信息：</p>
          <ul>
            <li>获得您的明确同意</li>
            <li>遵守法律法规的要求</li>
            <li>保护我们的合法权益</li>
            <li>与我们的服务提供商合作（需签署保密协议）</li>
          </ul>
        </section>
        <section>
          <h2>4. 信息安全</h2>
          <p>我们采取多种安全措施保护您的信息：</p>
          <ul>
            <li>使用加密技术保护数据传输</li>
            <li>实施访问控制机制</li>
            <li>定期安全审计</li>
            <li>员工保密培训</li>
          </ul>
        </section>
        <section>
          <h2>5. 您的权利</h2>
          <p>您对您的个人信息拥有以下权利：</p>
          <ul>
            <li>访问和获取您的个人信息</li>
            <li>更正或更新您的个人信息</li>
            <li>删除您的个人信息</li>
            <li>撤回同意的权利</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
  name: 'Privacy',
  components: {
    Icon,
  },
}
</script>

<style scoped>
.privacy-container {
  width: 100%;
  min-height: 100vh;
  background-color: rgb(26, 26, 26);
  padding: 50px 0 0 0;
}

.privacy-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  color: #ffffff;
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

.intro-box {
  background: linear-gradient(to right, rgba(255, 107, 0, 0.1), rgba(0, 0, 0, 0.3));
  padding: 1.5rem;
  border-left: 4px solid #ff6b00;
  margin-bottom: 2rem;
  border-radius: 0 8px 8px 0;
}

.intro-text {
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
  padding: 1rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
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
  content: '•';
  color: #ff6b00;
  position: absolute;
  left: -1rem;
}

strong {
  color: #ff6b00;
}
</style>
