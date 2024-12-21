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
              <h1>深空我的世界社区</h1>
            </div>
            <p class="subtitle">一支凭借着对深空的热爱，而执着追求的公益性团队</p>
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
              <li>
                <a href="#">
                  <div class="news-times">time:2023.09:28</div>
                  <div class="news-content">深空全新官网，统一风格，焕然一新</div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="news-times">time:2023.10:28</div>
                  <div class="news-content">深空联机内核，现已进行内部测试</div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="news-times">time:2023.09:20</div>
                  <div class="news-content">深空联机模块即将开启内测申请</div>
                </a>
              </li>
              <li>
                <a href="#">
                  <div class="news-times">time:2023.09:28</div>
                  <div class="news-content">深空即将新增开发者计划，为开发者提供更方便的功能</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="side-right glass"></div>
      </div>
    </section>

    <div class="content">
      <!-- list -->
      <section class="list w">
        <div class="block">
          <div class="left shadow"></div>
          <div class="right">
            <div class="shadow"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
            <div class="shadow"></div>
          </div>
        </div>
      </section>

      <!-- introduce -->
      <section class="introduce orange">
        <div class="content w">
          <h1>introduce</h1>
          <div class="title">here is title</div>
          <div class="content">
            here is content here is content here is content here is content here is content
          </div>
          <div class="img"></div>
          <div class="text">
            <div class="introduce-title">here is title here is title</div>
            <p>here is content here is content here is content here is content here is content</p>
            <ul>
              <li>
                <div class="icon"></div>
                <div class="text">
                  <p>一个年轻而富有活力的初创团队</p>
                  <p>在时间的沉淀下，即便是沧海一粟也可能绽放惊人动力</p>
                </div>
              </li>
              <li>
                <div class="icon"></div>
                <div class="text">
                  <p>一个凭借热爱而精益求精的团队</p>
                  <p>尽管我们是微弱的星光，当数量繁多时总能照亮深空</p>
                </div>
              </li>
            </ul>
            <div class="content">
              我们是我的世界(Minecraft)的一款社区内容+功能辅助的游戏团队，我们坚守初衷，不断学习与进步;
              我们听取意见，不断优化与完善; 我们与用户交流，不断提高自身。
            </div>
          </div>
        </div>
      </section>

      <!-- developer -->
      <section class="developer">
        <h1>developer</h1>
        <div class="title">here is title</div>
        <div class="content">
          here is content here is content here is content here is content here is content
        </div>
        <!-- <div class="account">
            <div class="avatar"></div>
            <div class="name"></div>
            <div class="profile"></div>
            <ul>
                <li>name</li>
                <li>name</li>
                <li>name</li>
            </ul>
        </div> -->

        <!-- Swiper -->
        <div class="swiper devSwiper" id="devSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
            <div class="swiper-slide">Slide 4</div>
          </div>
          <!-- <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div> -->
          <div class="swiper-pagination"></div>
        </div>
      </section>

      <!-- download -->
      <section class="download">
        <div class="window">
          <h1>download</h1>
          <div class="title">download</div>
          <div class="content">
            here is content here is content here is content here is content here is content
          </div>
          <button>download</button>
        </div>
      </section>

      <!-- update-log -->
      <section class="log orange">
        <div class="content w">
          <div class="left">
            <div class="subtitle">here is subtitle</div>
            <h1>here is title</h1>
            <div class="content">
              here is content here is content here is content here is content here is content
            </div>
            <button>HERE IS CONTENT</button>
          </div>
          <div class="right"></div>
        </div>
      </section>
    </div>
  </main>

  <!-- 页面主体部分 end -->
</template>
<script name="Home">
export default {
  name: 'Home',
}
</script>
<style src="..\assets\styles\home.css" scoped></style>
