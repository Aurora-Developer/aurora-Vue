<template>
  <div>
    <div
      class="modal glass"
      id="cookies-btn"
      :style="{ bottom: cookiesBottom }"
      v-if="!isCookiesAccepted"
    >
      <h3 class="title">{{ $t('cookies.title') }}</h3>
      <p class="message">{{ $t('cookies.message') }}</p>
      <p class="message">{{ $t('cookies.usageMessage') }}</p>
      <ul class="cookie-list">
        <li>{{ $t('cookies.purposes.preferences') }}</li>
        <li>{{ $t('cookies.purposes.analytics') }}</li>
        <li>{{ $t('cookies.purposes.personalization') }}</li>
      </ul>
      <div class="options">
        <button class="btn" id="allow" @click="allowCookies">
          {{ $t('cookies.buttons.accept') }}
        </button>
        <button class="btn" id="list" @click="showCookiesList">
          {{ $t('cookies.buttons.details') }}
        </button>
      </div>
    </div>

    <!-- Cookie 详情弹窗 -->
    <div class="modal glass cookie-details" v-if="showDetails">
      <h3 class="title">{{ $t('cookies.details.title') }}</h3>
      <div class="cookie-intro">
        <p>{{ $t('cookies.details.intro.what') }}</p>
        <p>
          {{ $t('cookies.details.intro.more') }}
          <router-link to="/cookies" class="policy-link" @click="closeDetails">
            {{ $t('cookies.details.policyLink') }}
          </router-link>
          中了解更多信息。
        </p>
      </div>
      <div class="cookie-types">
        <div class="cookie-item">
          <h4>{{ $t('cookies.details.types.necessary.name') }}</h4>
          <p>{{ $t('cookies.details.types.necessary.description') }}</p>
          <p class="cookie-duration">
            {{ $t('cookies.details.duration') }}{{ $t('cookies.details.types.necessary.duration') }}
          </p>
        </div>
        <div class="cookie-item">
          <h4>{{ $t('cookies.details.types.functional.name') }}</h4>
          <p>{{ $t('cookies.details.types.functional.description') }}</p>
          <p class="cookie-duration">
            {{ $t('cookies.details.duration')
            }}{{ $t('cookies.details.types.functional.duration') }}
          </p>
        </div>
        <div class="cookie-item">
          <h4>{{ $t('cookies.details.types.analytics.name') }}</h4>
          <p>{{ $t('cookies.details.types.analytics.description') }}</p>
          <p class="cookie-duration">
            {{ $t('cookies.details.duration') }}{{ $t('cookies.details.types.analytics.duration') }}
          </p>
        </div>
      </div>
      <button class="btn close-btn" @click="closeDetails">{{ $t('cookies.buttons.close') }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cookies',
  data() {
    return {
      cookiesBottom: '-50%',
      isCookiesAccepted: false,
      showDetails: false,
    }
  },
  methods: {
    allowCookies() {
      this.isCookiesAccepted = true
      this.cookiesBottom = '-50%'
      localStorage.setItem('userCookies', '1')
    },
    showCookiesList() {
      this.showDetails = true
    },
    closeDetails() {
      this.showDetails = false
    },
  },
  mounted() {
    this.isCookiesAccepted = localStorage.getItem('userCookies') === '1'

    if (!this.isCookiesAccepted) {
      setTimeout(() => {
        this.cookiesBottom = '3%'
        setTimeout(() => {
          this.cookiesBottom = '0'
        }, 1600)
      }, 300)
    }
  },
}
</script>

<style scoped>
.modal {
  position: fixed;
  left: 50%;
  bottom: -50%; /* 初始隐藏位置 */
  transform: translate(-50%, 0);
  width: auto;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 3rem;
  border: 3px solid black;
  border-radius: 5px;
  background: rgba(55, 55, 55, 0.6);
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.2);
  z-index: 3;
  transition: all 2s; /* 平滑动画 */
}

.message {
  font-size: 1.1rem;
  margin-bottom: 1.6rem;
  margin-top: 0;
}

.options {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.btn {
  color: black;
  font-weight: bold;
  font-family: inherit;
  font-size: inherit;
  background: white;
  padding: 0.3rem 3.4rem;
  border: 3px solid black;
  margin-right: 2.6rem;
  box-shadow: 0 0 0 black;
  transition: all 0.2s ease;
}

.btn:last-child {
  margin-right: 0;
}

.btn:hover {
  box-shadow: 0.4rem 0.4rem 0 black;
  transform: translate(-0.4rem, -0.4rem);
}

.btn:active {
  box-shadow: 0 0 0 black;
  transform: translate(0, 0);
}

.title {
  margin: 0 0 1rem 0;
  color: white;
}

.cookie-list {
  text-align: left;
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.cookie-list li {
  margin: 0.3rem 0;
}

.cookie-details {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  padding: 1.2rem;
}

.cookie-item {
  text-align: left;
  margin: 0.8rem 0;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
}

.cookie-item h4 {
  margin: 0 0 0.5rem 0;
  color: white;
}

.cookie-duration {
  font-size: 0.9rem;
  color: #ccc;
  margin: 0.5rem 0 0 0;
}

.close-btn {
  margin-top: 1rem;
}

.cookie-types {
  max-height: 60vh;
  overflow-y: auto;
  padding: 0 1rem;
}

.cookie-intro {
  color: white;
  text-align: left;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.policy-link {
  color: #4caf50;
  text-decoration: underline;
  font-weight: bold;
}

.policy-link:hover {
  color: #45a049;
}

@media screen and (max-width: 768px) {
  .cookie-details {
    width: 95%;
    padding: 1rem;
  }

  .cookie-types {
    padding: 0 0.5rem;
  }

  .cookie-item {
    padding: 0.6rem;
  }

  .btn {
    padding: 0.3rem 2rem;
    margin-right: 1rem;
  }
}

@media screen and (max-width: 480px) {
  .cookie-details {
    width: 98%;
    padding: 0.8rem;
  }

  .cookie-intro {
    font-size: 0.9rem;
  }

  .cookie-item h4 {
    font-size: 1rem;
  }

  .cookie-item p {
    font-size: 0.9rem;
  }
}
</style>
