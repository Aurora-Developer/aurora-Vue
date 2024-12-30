<template>
  <!-- 页面主体部分 start -->
  <main>
    <!-- banner -->
    <section class="banner">
      <!-- banner 标题文字 -->
      <div class="banner-title">
        <div class="summary w">
          <div class="text glass">
            <div class="title">
              <h1>{{ bannerData.title }}</h1>
            </div>
            <p class="subtitle">{{ bannerData.subtitle }}</p>
          </div>
        </div>
      </div>

      <!-- banner 底部新闻 -->
      <div class="news glass scroll-reveal">
        <div class="side-left glass"></div>
        <div class="column">
          <div class="news-title">
            <h2>news</h2>
          </div>
          <div class="news-content">
            <ul>
              <li v-for="(item, index) in newsData" :key="index" class="scroll-reveal">
                <a :href="item.url">
                  <div class="news-times">time:{{ item.time }}</div>
                  <div class="news-content">{{ item.content }}</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="side-right glass"></div>
      </div>
    </section>

    <!-- introduce -->
    <section class="introduce orange">
      <div class="content w">
        <h1>{{ introduceData.title }}</h1>
        <div class="title">{{ introduceData.subTitle }}</div>
        <div class="content">{{ introduceData.content }}</div>
        <div class="img"></div>
        <div class="text">
          <div class="introduce-title">{{ introduceData.additionalText[0].title }}</div>
          <p>{{ introduceData.additionalText[0].description }}</p>
          <ul>
            <li v-for="(item, index) in introduceData.additionalText" :key="index">
              <Icon icon="material-symbols:check-circle-outline" class="icon feature-icon" />
              <div class="text">
                <p>{{ item.title }}</p>
                <p>{{ item.description }}</p>
              </div>
            </li>
          </ul>
          <div class="content">{{ introduceData.moreContent }}</div>
        </div>
      </div>
    </section>

    <!-- developer -->
    <!-- <section class="developer">
      <h1>{{ developerData.title }}</h1>
      <div class="title">{{ developerData.subTitle }}</div>
      <div class="content">{{ developerData.content }}</div> -->
    <!-- Swiper -->
    <!-- <div class="swiper devSwiper" id="devSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section> -->

    <!-- download -->
    <section class="download">
      <div class="window glass scroll-reveal">
        <div class="download-content">
          <div class="left scroll-reveal">
            <div class="download-header">
              <div class="subtitle">MINECRAFT</div>
              <h1>{{ downloadData.title }}</h1>
            </div>
            <div class="version-info scroll-reveal">
              <div class="version">
                <span class="label">最新版本</span>
                <span class="number">{{ versionInfo.version }}</span>
              </div>
              <div class="update-time">
                <span class="label">同步数据时间</span>
                <span class="time">{{ versionInfo.updateTime }}</span>
              </div>
              <div class="platform">
                <span class="label">支持平台</span>
                <span class="platforms">Android</span>
              </div>
            </div>
            <div class="content scroll-reveal">{{ downloadData.content }}</div>
            <div class="download-features scroll-reveal">
              <div class="feature">
                <Icon icon="material-symbols:security" class="feature-icon grass" />
                <span>稳定运行</span>
              </div>
              <div class="feature">
                <Icon icon="material-symbols:update" class="feature-icon tnt" />
                <span>持续更新</span>
              </div>
              <div class="feature">
                <Icon icon="material-symbols:package-outline" class="feature-icon chest" />
                <span>资源丰富</span>
              </div>
            </div>
            <div class="download-buttons scroll-reveal">
              <button class="primary-btn" @click="redirectToDownload">
                <i class="download-icon"></i>
                立即下载
              </button>
              <button class="secondary-btn" @click="redirectToChangelog">更新日志</button>
            </div>
          </div>
          <div class="right scroll-reveal">
            <div class="minecraft-scene">
              <div class="minecraft-block floating"></div>
              <div class="minecraft-block-shadow"></div>
              <div class="particles"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 开发者计划 (原 log) -->
    <section class="dev-program orange">
      <div class="content w">
        <div class="left">
          <div class="program-header">
            <div class="subtitle">AURORA</div>
            <h1>开发者计划</h1>
          </div>
          <div class="program-content">
            <p class="description">{{ updateLogData.content }}</p>
            <div class="features">
              <div class="feature-item">
                <Icon icon="material-symbols:lightbulb-outline" class="feature-icon support-icon" />
                <h3>创新驱动</h3>
                <p>获取 Aurora 团队提供的专业技术咨询与支持服务</p>
              </div>
              <div class="feature-item">
                <Icon icon="material-symbols:star-outline" class="feature-icon resource-icon" />
                <h3>追求卓越</h3>
                <p>获取完整的技术文档、SDK 及开发工具支持</p>
              </div>
              <div class="feature-item">
                <Icon icon="material-symbols:group-outline" class="feature-icon development-icon" />
                <h3>开发社区</h3>
                <p>加入专业的开发者社区，参与技术交流与分享</p>
              </div>
            </div>
            <button class="join-btn" @click="redirectToDevelopment">申请加入开发者计划</button>
          </div>
        </div>
        <div class="right">
          <div class="program-image"></div>
        </div>
      </div>
    </section>
  </main>
  <!-- 页面主体部分 end -->
</template>

<script>
// 引入外部的数据文件
import {
  bannerData,
  newsData,
  introduceData,
  developerData,
  downloadData,
  updateLogData,
} from '../data/homeData'
import { Icon } from '@iconify/vue'
import { initScrollReveal, addScrollRevealClass } from '../utils/scrollReveal'

export default {
  name: 'Home',
  components: {
    Icon,
  },
  data() {
    return {
      bannerData,
      newsData,
      introduceData,
      developerData,
      downloadData,
      updateLogData,
      bannerImage: '',
      versionInfo: {
        version: '0.0.0',
        updateTime: '',
      },
    }
  },
  mounted() {
    addScrollRevealClass()
    initScrollReveal()
    this.fetchVersionInfo()
  },
  methods: {
    async fetchVersionInfo() {
      try {
        const response = await fetch('https://api.aurora-sky.top/update.php', {
          headers: {
            Accept: 'application/json',
          },
        })
        const data = await response.json()
        if (data) {
          this.versionInfo.version = data.version || this.versionInfo.version
          // 获取当前日期并格式化
          const currentDate = new Date()
            .toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
            })
            .replace(/\//g, '-')
          this.versionInfo.updateTime = currentDate // 更新为当前日期
        }
      } catch (error) {
        console.error('获取版本信息失败:', error)
      }
    },
    async redirectToDownload() {
      // 调用 API 获取下载链接
      const response = await fetch('https://api.aurora-sky.top/update.php', {
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        const data = await response.json()
        const downloadUrl = data.url // 假设 API 返回的下载链接在 url 字段中
        if (downloadUrl) {
          window.location.href = downloadUrl // 跳转到下载链接
        } else {
          console.error('未找到下载链接')
        }
      } else {
        console.error('获取下载链接失败:', response.status)
      }
    },
    redirectToChangelog() {
      this.$router.push('/download').then(() => {
        setTimeout(() => {
          const element = document.getElementById('changelog')
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      })
    },
    redirectToDevelopment() {
      this.$router.push('/development')
    },
  },
}
</script>

<style src="@/assets/styles/home.css" scoped></style>
<style>
.introduce,
.dev-program,
.download {
  position: relative;
  z-index: 0;
}
</style>
