<template>
  <div class="dmca-container">
    <div class="dmca-content">
      <div class="header-section">
        <Icon icon="mdi:copyright" class="icon" />
        <h1>DMCA</h1>
      </div>
      <div class="dmca-intro">
        <p class="intro-text">
          我们尊重知识产权，并致力于保护创作者的权益。如果您认为您的作品在未经授权的情况下被使用，请按照以下流程提交DMCA投诉。
        </p>
        <div class="copyright-symbol">©</div>
      </div>
      <div class="content">
        <div class="dmca-intro">
          <div class="copyright-symbol">©</div>
          <p class="intro-text">
            数字千年版权法（DMCA）为版权所有者提供了保护其知识产权的法律框架。我们严格遵守DMCA规定，保护创作者的权益。
          </p>
        </div>
        <section>
          <h2>1. 版权侵权通知</h2>
          <p>如果您认为您的版权作品在我们的网站上被侵权，请提供以下信息：</p>
          <ul>
            <li>您的联系信息（姓名、地址、电话号码和电子邮件）</li>
            <li>被侵权作品的描述和位置</li>
            <li>您对该作品拥有专有权利的声明</li>
            <li>您认为使用行为未经授权的声明</li>
            <li>关于信息准确性的声明和对伪证的惩罚警告</li>
          </ul>
        </section>
        <section>
          <h2>2. DMCA 下架程序</h2>
          <p>我们的DMCA下架程序包括以下步骤：</p>
          <ul>
            <li>接收版权所有者的侵权通知</li>
            <li>评估通知的有效性和完整性</li>
            <li>移除或禁用对涉嫌侵权内容的访问</li>
            <li>通知相关用户内容被移除的原因</li>
            <li>处理反通知（如果收到）</li>
          </ul>
        </section>
        <section>
          <h2>3. 反通知程序</h2>
          <p>如果您认为您的内容被错误移除，您可以提交反通知：</p>
          <ul>
            <li>提供您的身份信息和联系方式</li>
            <li>标识被移除的内容和原始位置</li>
            <li>声明您认为移除是由于错误或误认</li>
            <li>同意接受相关司法管辖</li>
          </ul>
        </section>
        <section>
          <h2>4. 重复侵权者政策</h2>
          <p>我们对重复侵权者采取以下措施：</p>
          <ul>
            <li>记录版权侵权通知</li>
            <li>对多次侵权的用户发出警告</li>
            <li>在适当情况下终止重复侵权者的账户</li>
            <li>保留所有相关记录</li>
          </ul>
        </section>
        <section>
          <h2>5. 免责声明</h2>
          <p>关于DMCA政策的重要说明：</p>
          <ul>
            <li>我们尊重知识产权并认真对待侵权指控</li>
            <li>虚假的侵权指控可能导致法律责任</li>
            <li>我们保留更新此政策的权利</li>
            <li>此政策不构成法律建议</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
  name: 'DMCA',
  components: {
    Icon,
  },
}
</script>

<style scoped>
.dmca-container {
  width: 100%;
  min-height: 100vh;
  background-color: rgb(26, 26, 26);
  padding-top: 50px;
  color: #ffffff;
  margin-top: -20px;
  position: relative;
  z-index: 0;
}

.dmca-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.header-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(255, 107, 0, 0.1));
  border-radius: 8px;
  position: relative;
  z-index: 1;
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

.dmca-intro {
  position: relative;
  background: linear-gradient(to right, rgba(255, 107, 0, 0.1), rgba(0, 0, 0, 0.3));
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 0, 0.2);
  overflow: hidden;
}

.copyright-symbol {
  position: absolute;
  right: -20px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 8rem;
  color: rgba(255, 107, 0, 0.1);
  font-weight: bold;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 80%;
  position: relative;
  z-index: 1;
}

.content {
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 0, 0.2);
  position: relative;
}

.content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='20' y='20' text-anchor='middle' dominant-baseline='middle' font-size='20' fill='%23ff6b00' fill-opacity='0.03'%3E©%3C/text%3E%3C/svg%3E")
    repeat;
  pointer-events: none;
}

section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  border-right: 3px solid #ff6b00;
}

h2 {
  color: #ff6b00;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
}

h2::before {
  content: '©';
  margin-right: 0.5rem;
  font-weight: bold;
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
  padding-left: 1.5rem;
}

li::before {
  content: '®';
  color: #ff6b00;
  position: absolute;
  left: 0;
  font-weight: bold;
}

strong {
  color: #ff6b00;
}

.dmca-container::before {
  content: '';
  display: block;
  height: 50px;
  width: 100%;
}

nav {
  background-color: black;
}
</style>
