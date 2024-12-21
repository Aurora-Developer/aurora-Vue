<template>
  <footer>
    <div class="link-box">
      <div class="main-link">
        <div class="link-item first">
          <ul>
            <li class="title">community</li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
          </ul>
        </div>
        <div class="link-item">
          <ul>
            <li class="title">title</li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
          </ul>
        </div>
        <div class="link-item">
          <ul>
            <li class="title">title</li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
          </ul>
        </div>
        <div class="link-item">
          <ul>
            <li class="title">title</li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
            <li><a href="#">link</a></li>
          </ul>
        </div>
      </div>
      <div class="other-link">
        <div class="left">
          <div>Language: English</div>
          <div>
            <a href="#">Privacy policy</a>
            <a href="#">Cookie policy</a>
            <a href="#">User agreement</a>
            <a href="#">DMCA</a>
          </div>
          <div>copyright: community developer.</div>
        </div>
        <div class="right">sns icon</div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'Footer', 
}
</script>
<style>
/* 底部页脚部分 */
footer {
  overflow: hidden;
}

.link-box {
  width: 100%;
  padding-top: 20px;
  /* background-color: pink; */
  background:
    url(../assets/images/footer-bg.png),
    lightgray 50% / cover no-repeat;
  color: #fff;
}

.link-box .main-link {
  display: flex;
  /* background-color: #6fc; */
  padding: 15px;
}

.link-box .main-link:first-child {
  padding-left: 90px;
}

.link-box .link-item {
  padding: 10px 0 0 20px;
  flex-grow: 1;
  width: 340px;
}

.link-box .link-item a::before {
  content: '> ';
}

.link-box,
.main-link .first a::before {
  content: '';
}

.link-box .title {
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 15px;
}

.link-box .main-link .link-item li:not(.title) {
  line-height: 28px;
  padding-left: 4px;
}

.link-box .other-link {
  display: flex;
  margin-top: 15px;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(0, 0, 0, 0.45);
  padding: 15px 45px;
}

.link-box .other-link a {
  color: rgba(255, 255, 255, 0.5);
}

.link-box .other-link .left div {
  padding: 5px;
}

.link-box .other-link .left {
  flex-grow: 4;
}

.link-box .other-link .right {
  flex-grow: 1;
}
</style>
