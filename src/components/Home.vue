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
              <h1>{{ $t('home.banner.title') }}</h1>
            </div>
            <p class="subtitle">{{ $t('home.banner.subtitle') }}</p>
          </div>
        </div>
      </div>

      <!-- banner 底部新闻 -->
      <div class="news glass scroll-reveal">
        <div class="side-left glass"></div>
        <div class="column">
          <div class="news-title">
            <h2>{{ $t('home.news.title') }}</h2>
          </div>
          <div class="news-content">
            <ul>
              <li v-for="(item, index) in newsData" :key="index" class="scroll-reveal">
                <a :href="item.url">
                  <div class="news-times">{{ $t('home.news.time') }}:{{ item.time }}</div>
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
        <h1>{{ $t('home.introduce.title') }}</h1>
        <div class="title">{{ $t('home.introduce.subTitle') }}</div>
        <div class="content">{{ $t('home.introduce.content') }}</div>
        <div class="img"></div>
        <div class="text">
          <div class="introduce-title">{{ $t('home.introduce.features.innovation.title') }}</div>
          <p>{{ $t('home.introduce.features.innovation.description') }}</p>
          <ul>
            <li>
              <Icon icon="material-symbols:check-circle-outline" class="icon feature-icon" />
              <div class="text">
                <p>{{ $t('home.introduce.features.innovation.title') }}</p>
                <p>{{ $t('home.introduce.features.innovation.description') }}</p>
              </div>
            </li>
            <li>
              <Icon icon="material-symbols:check-circle-outline" class="icon feature-icon" />
              <div class="text">
                <p>{{ $t('home.introduce.features.excellence.title') }}</p>
                <p>{{ $t('home.introduce.features.excellence.description') }}</p>
              </div>
            </li>
          </ul>
          <div class="content">{{ $t('home.introduce.moreContent') }}</div>
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
              <h1>{{ $t('home.download.title') }}</h1>
            </div>
            <div class="version-info scroll-reveal">
              <div class="version">
                <span class="label">{{ $t('home.download.version.latest') }}</span>
                <span class="number">{{ versionInfo.version }}</span>
              </div>
              <div class="update-time">
                <span class="label">{{ $t('home.download.version.updateTime') }}</span>
                <span class="time">{{ versionInfo.updateTime }}</span>
              </div>
              <div class="platform">
                <span class="label">{{ $t('home.download.version.platform') }}</span>
                <span class="platforms">Android</span>
              </div>
            </div>
            <div class="content scroll-reveal">{{ $t('home.download.content') }}</div>
            <div class="download-features scroll-reveal">
              <div class="feature">
                <Icon icon="material-symbols:security" class="feature-icon grass" />
                <span>{{ $t('home.download.features.stable') }}</span>
              </div>
              <div class="feature">
                <Icon icon="material-symbols:update" class="feature-icon tnt" />
                <span>{{ $t('home.download.features.update') }}</span>
              </div>
              <div class="feature">
                <Icon icon="material-symbols:package-outline" class="feature-icon chest" />
                <span>{{ $t('home.download.features.rich') }}</span>
              </div>
            </div>
            <div class="download-buttons scroll-reveal">
              <button class="primary-btn" @click="redirectToDownload">
                <i class="download-icon"></i>
                {{ $t('home.download.buttons.download') }}
              </button>
              <button class="secondary-btn" @click="redirectToChangelog">
                {{ $t('home.download.buttons.changelog') }}
              </button>
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

    <!-- 开发者计划 -->
    <section class="dev-program orange">
      <div class="content w">
        <div class="left">
          <div class="program-header">
            <div class="subtitle">{{ $t('home.devProgram.subtitle') }}</div>
            <h1>{{ $t('home.devProgram.title') }}</h1>
          </div>
          <div class="program-content">
            <p class="description">{{ $t('home.devProgram.content') }}</p>
            <div class="features">
              <div class="feature-item">
                <Icon icon="material-symbols:lightbulb-outline" class="feature-icon support-icon" />
                <h3>{{ $t('home.devProgram.features.innovation.title') }}</h3>
                <p>{{ $t('home.devProgram.features.innovation.description') }}</p>
              </div>
              <div class="feature-item">
                <Icon icon="material-symbols:star-outline" class="feature-icon resource-icon" />
                <h3>{{ $t('home.devProgram.features.excellence.title') }}</h3>
                <p>{{ $t('home.devProgram.features.excellence.description') }}</p>
              </div>
              <div class="feature-item">
                <Icon icon="material-symbols:group-outline" class="feature-icon development-icon" />
                <h3>{{ $t('home.devProgram.features.community.title') }}</h3>
                <p>{{ $t('home.devProgram.features.community.description') }}</p>
              </div>
            </div>
            <button class="join-btn" @click="redirectToDevelopment">
              {{ $t('home.devProgram.button') }}
            </button>
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
import { Icon } from '@iconify/vue'
import { initScrollReveal, addScrollRevealClass } from '../utils/scrollReveal'

export default {
  name: 'Home',
  components: {
    Icon,
  },
  data() {
    return {
      newsData: [
        { time: '2023.09.28', content: '官网全新改版上线，提供更优质的用户体验', url: '#' },
        { time: '2023.10.28', content: '联机内核系统进入内部测试阶段', url: '#' },
        { time: '2023.09.20', content: '联机模组测试资格申请通道即将开放', url: '#' },
        { time: '2023.09.28', content: '开发者计划正式启动，提供全方位技术支持', url: '#' },
      ],
      originalNewsData: null, // 保存原始简体内容
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
          window.location.href = downloadUrl
        }
      }
    },
    redirectToChangelog() {
      this.$router.push('/changelog')
    },
    redirectToDevelopment() {
      this.$router.push('/development')
    },
    async translateToTraditional(text) {
      try {
        const response = await fetch('https://api.zhconvert.org/convert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: text,
            converter: 'Traditional',
          }),
        })
        const data = await response.json()
        return data.data.text
      } catch (error) {
        console.error('翻译失败:', error)
        return text
      }
    },
    async translateNews() {
      if (this.$i18n.locale === 'zh-TW') {
        // 保存原始数据（如果还没保存）
        if (!this.originalNewsData) {
          this.originalNewsData = JSON.parse(JSON.stringify(this.newsData))
        }
        // 翻译所有新闻内容
        const translatedNews = await Promise.all(
          this.newsData.map(async (news) => ({
            ...news,
            content: await this.translateToTraditional(news.content),
          })),
        )
        this.newsData = translatedNews
      } else if (this.$i18n.locale === 'zh-CN' && this.originalNewsData) {
        // 恢复原始简体内容
        this.newsData = JSON.parse(JSON.stringify(this.originalNewsData))
      }
    },
  },
  watch: {
    '$i18n.locale': {
      handler: 'translateNews',
      immediate: true,
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
