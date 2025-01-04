<template>
  <div class="about-container">
    <!-- 关于我们部分 -->
    <section class="about-section scroll-reveal">
      <h1>{{ $t('about.title') }}</h1>
      <div class="content scroll-reveal">
        <p>{{ $t('about.description') }}</p>
      </div>
    </section>

    <!-- 团队介绍部分 -->
    <section class="team-section scroll-reveal">
      <h2>{{ $t('about.team.title') }}</h2>
      <div class="team-grid">
        <div class="team-member scroll-reveal" v-for="member in teamMembers" :key="member.id">
          <div class="member-avatar">
            <Icon :icon="member.icon" class="member-icon" />
          </div>
          <h3>{{ member.name }}</h3>
          <p class="role">{{ member.role }}</p>
          <p class="description">{{ member.description }}</p>
        </div>
      </div>
    </section>

    <!-- 联系我们部分 -->
    <section class="contact-section scroll-reveal">
      <h2>{{ $t('about.contact.title') }}</h2>
      <div class="contact-content">
        <div class="contact-info scroll-reveal">
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <p>contact@aurora-minecraft.com</p>
          </div>
          <div class="contact-item">
            <i class="fab fa-github"></i>
            <p>Aurora-Developer</p>
          </div>
        </div>
        <div class="github-feedback scroll-reveal">
          <p>{{ $t('about.contact.feedback') }}</p>
          <a href="https://github.com/Aurora-Developer/feedback" target="_blank" class="github-btn">
            <i class="fab fa-github"></i>
            {{ $t('about.contact.githubButton') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { initScrollReveal, addScrollRevealClass } from '@/utils/scrollReveal'
import { Icon } from '@iconify/vue'

export default {
  name: 'About',
  components: {
    Icon,
  },
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: 'chenskiro',
          role: this.$t('about.team.members.webDev'),
          description: this.$t('about.team.members.webDevDesc'),
          icon: 'material-symbols:code',
        },
        {
          id: 2,
          name: 'Pararescue Jumpers',
          role: this.$t('about.team.members.appDev'),
          description: this.$t('about.team.members.appDevDesc'),
          icon: 'material-symbols:app-registration',
        },
      ],
    }
  },
  mounted() {
    setTimeout(() => {
      addScrollRevealClass()
      initScrollReveal()
    }, 100)
  },
}
</script>

<style scoped>
.scroll-reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease-out;
}

.scroll-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.about-container {
  padding: 80px 20px;
  background-color: #121212;
  color: #e6e6e6;
}

section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
}

h1,
h2 {
  color: #ff952e;
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  font-size: 2.5em;
}

h2 {
  font-size: 2em;
  position: relative;
  display: inline-block;
  padding: 0 20px;
}

h2::before,
h2::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 50px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #ff952e, transparent);
}

h2::before {
  right: 100%;
}

h2::after {
  left: 100%;
}

.content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

/* 团队部分样式 */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
  padding: 20px;
}

.team-member {
  background: rgba(255, 149, 52, 0.1);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
}

.team-member:hover {
  transform: translateY(-5px);
}

.member-avatar {
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #ff952e;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 149, 52, 0.1);
}

.member-icon {
  width: 60px;
  height: 60px;
  color: #ff952e;
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.role {
  color: #ff952e;
  margin: 10px 0;
}

/* 联系我们部分样式 */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.1em;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

input,
textarea {
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: #e6e6e6;
}

textarea {
  height: 150px;
  resize: vertical;
}

.submit-btn {
  padding: 12px 24px;
  background: #ff952e;
  color: #121212;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
}

.submit-btn:hover {
  background: #ff8c1a;
}

/* GitHub 反馈部分样式 */
.github-feedback {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
}

.github-feedback p {
  text-align: center;
  font-size: 1.1em;
  color: #e6e6e6;
}

.github-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: #ff952e;
  color: #121212;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: all 0.3s ease;
}

.github-btn i {
  font-size: 1.2em;
}

.github-btn:hover {
  background: #ff8c1a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 149, 46, 0.2);
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }
}

.contact-section {
  position: relative;
  padding: 40px 0;
}

.contact-info {
  background: rgba(255, 149, 46, 0.05);
  padding: 30px;
  border-radius: 15px;
}

.contact-item {
  padding: 15px;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.contact-item:hover {
  background: rgba(255, 149, 46, 0.1);
  transform: translateX(5px);
}

.contact-item i {
  color: #ff952e;
  font-size: 1.5em;
  transition: transform 0.3s ease;
}

.contact-item:hover i {
  transform: scale(1.1);
}

.github-feedback {
  background: rgba(255, 149, 46, 0.05);
  border-radius: 15px;
  padding: 30px;
}
</style>
