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
      <div class="news glass">
        <div class="side-left glass"></div>
        <div class="column">
          <div class="news-title">
            <h2>news</h2>
          </div>
          <div class="news-content">
            <ul>
              <li v-for="(item, index) in newsData" :key="index">
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
              <div class="icon"></div>
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
      <div class="window glass">
        <div class="download-content">
          <div class="left">
            <div class="download-header">
              <div class="subtitle">MINECRAFT</div>
              <h1>{{ downloadData.title }}</h1>
            </div>
            <div class="version-info">
              <div class="version">
                <span class="label">最新版本</span>
                <span class="number">v2.0.1</span>
              </div>
              <div class="update-time">
                <span class="label">更新时间</span>
                <span class="time">2024-01-20</span>
              </div>
              <div class="platform">
                <span class="label">支持平台</span>
                <span class="platforms">Windows / MacOS</span>
              </div>
            </div>
            <div class="content">{{ downloadData.content }}</div>
            <div class="download-features">
              <div class="feature">
                <div class="feature-icon grass"></div>
                <span>稳定运行</span>
              </div>
              <div class="feature">
                <div class="feature-icon tnt"></div>
                <span>持续更新</span>
              </div>
              <div class="feature">
                <div class="feature-icon chest"></div>
                <span>资源丰富</span>
              </div>
            </div>
            <div class="download-buttons">
              <button class="primary-btn">
                <i class="download-icon"></i>
                立即下载
              </button>
              <button class="secondary-btn">更新日志</button>
            </div>
          </div>
          <div class="right">
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
                <div class="feature-icon"></div>
                <h3>专业技术支持</h3>
                <p>获取 Aurora 团队提供的专业技术咨询与支持服务</p>
              </div>
              <div class="feature-item">
                <div class="feature-icon"></div>
                <h3>开发资源共享</h3>
                <p>获取完整的技术文档、SDK 及开发工具支持</p>
              </div>
              <div class="feature-item">
                <div class="feature-icon"></div>
                <h3>开发者社区</h3>
                <p>加入专业的开发者社区，参与技术交流与分享</p>
              </div>
            </div>
            <button class="join-btn">申请加入开发者计划</button>
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

export default {
  name: 'Home',
  data() {
    return {
      bannerData,
      newsData,
      introduceData,
      developerData,
      downloadData,
      updateLogData,
    }
  },
}
</script>

<style src="@/assets/styles/home.css" scoped></style>
