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
      <div class="window">
        <h1>{{ downloadData.title }}</h1>
        <div class="title">download</div>
        <div class="content">{{ downloadData.content }}</div>
        <button>download</button>
      </div>
    </section>

    <!-- update-log -->
    <section class="log orange">
      <div class="content w">
        <div class="left">
          <div class="subtitle">{{ updateLogData.subtitle }}</div>
          <h1>{{ updateLogData.title }}</h1>
          <div class="content">{{ updateLogData.content }}</div>
          <button>HERE IS CONTENT</button>
        </div>
        <div class="right"></div>
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

<style src="..\assets\styles\home.css" scoped></style>
