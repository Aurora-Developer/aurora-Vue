<template>
  <div class="agreement-container">
    <div class="agreement-content">
      <div class="header-section">
        <div class="icon">
          <i class="fas fa-file-contract"></i>
        </div>
        <h1>用户协议</h1>
      </div>
      <div class="content">
        <div class="agreement-intro">
          <div class="stamp">
            <span>用户协议</span>
          </div>
          <p class="intro-text">
            本协议是您与我们之间的法律文件，请在使用我们的服务之前仔细阅读以下条款。使用我们的服务即表示您同意接受这些条款的约束。
          </p>
        </div>
        <section>
          <h2>1. 服务条款</h2>
          <p>欢迎使用我们的服务。通过访问和使用本网站，您同意遵守以下条款：</p>
          <ul>
            <li>您必须年满13岁或在您所在地区的法定年龄才能使用我们的服务</li>
            <li>您同意提供真实、准确、完整的个人信息</li>
            <li>您同意遵守所有适用的法律法规</li>
            <li>您理解并同意我们可能会不时更新这些条款</li>
          </ul>
        </section>
        <section>
          <h2>2. 用户责任</h2>
          <p>作为用户，您需要承担以下责任：</p>
          <ul>
            <li>保护您的账户安全，包括用户名和密码</li>
            <li>对您账户下的所有活动负责</li>
            <li>不得从事任何违法或有害活动</li>
            <li>不得干扰或破坏服务的正常运行</li>
            <li>不得未经授权访问他人账户或系统</li>
          </ul>
        </section>
        <section>
          <h2>3. 内容规范</h2>
          <p>在使用我们的服务时，您同意：</p>
          <ul>
            <li>不发布任何违法、有害、威胁、滥用、骚扰、诽谤的内容</li>
            <li>不侵犯他人的知识产权</li>
            <li>不传播垃圾信息或恶意软件</li>
            <li>不从事任何可能损害他人权益的行为</li>
          </ul>
        </section>
        <section>
          <h2>4. 知识产权</h2>
          <p>关于知识产权，请注意：</p>
          <ul>
            <li>网站的所有内容均受版权法保护</li>
            <li>未经许可，不得复制、修改或分发我们的内容</li>
            <li>您保留您创作内容的所有权，但授予我们使用许可</li>
            <li>我们有权删除侵犯知识产权的内容</li>
          </ul>
        </section>
        <section>
          <h2>5. 服务变更和终止</h2>
          <p>关于服务的变更和终止：</p>
          <ul>
            <li>我们保留随时修改或终止服务的权利</li>
            <li>我们会提前通知重大服务变更</li>
            <li>违反协议的账户可能被暂停或终止</li>
            <li>您可以随时终止使用我们的服务</li>
          </ul>
        </section>
        <section>
          <h2>6. 免责声明</h2>
          <p>我们的免责声明包括：</p>
          <ul>
            <li>服务按"现状"提供，不提供任何明示或暗示的保证</li>
            <li>我们不对用户产生的任何损失负责</li>
            <li>我们不对第三方内容或服务负责</li>
            <li>我们保留在必要时更新本协议的权利</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Agreement',
}
</script>

<style scoped>
.agreement-container {
  width: 100%;
  min-height: 100vh;
  background-color: rgb(26, 26, 26);
  padding: 50px 0 0 0;
  color: #ffffff;
}

.agreement-content {
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

.agreement-intro {
  position: relative;
  background: linear-gradient(to right, rgba(255, 107, 0, 0.1), rgba(0, 0, 0, 0.3));
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 0, 0.2);
}

.stamp {
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%) rotate(15deg);
  border: 2px solid #ff6b00;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff6b00;
  font-weight: bold;
  opacity: 0.8;
  animation: stamp 1s ease-out;
}

@keyframes stamp {
  0% {
    transform: translateY(-50%) rotate(0deg) scale(2);
    opacity: 0;
  }
  100% {
    transform: translateY(-50%) rotate(15deg) scale(1);
    opacity: 0.8;
  }
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  max-width: 80%;
}

.content {
  background: rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 107, 0, 0.2);
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff6b00' fill-opacity='0.05'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3C/g%3E%3C/svg%3E");
}

section {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  border-left: 3px solid #ff6b00;
}

h2 {
  color: #ff6b00;
  margin: 1.5rem 0;
  display: flex;
  align-items: center;
}

h2::before {
  content: '§';
  margin-right: 0.5rem;
  color: #ff6b00;
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
  content: '✓';
  color: #ff6b00;
  position: absolute;
  left: 0;
}

strong {
  color: #ff6b00;
}
</style>
