<template>
  <div class="news-container">
    <!-- 新闻分类导航 -->
    <div class="news-categories">
      <div
        v-for="category in categories"
        :key="category.id"
        :class="['category-item', { active: currentCategory === category.id }]"
        @click="changeCategory(category.id)"
      >
        {{ category.name }}
      </div>
    </div>

    <!-- 新闻列表 -->
    <div class="news-list">
      <div v-if="loading" class="loading">
        <div class="spinner"></div>
        <p>加载中...</p>
      </div>
      <template v-else>
        <div v-for="news in filteredNewsList" :key="news.id" class="news-item">
          <div class="news-image" v-if="news.image">
            <img :src="news.image" :alt="news.title" />
          </div>
          <div class="news-content">
            <h3 class="news-title">{{ news.title }}</h3>
            <p class="news-summary">{{ news.summary }}</p>
            <div class="news-meta">
              <span class="news-date">{{ news.date }}</span>
              <span class="news-category">{{ news.categoryName }}</span>
            </div>
          </div>
        </div>
      </template>

      <div v-if="!loading && filteredNewsList.length === 0" class="no-data">暂无相关新闻</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

// 新闻分类数据
const categories = computed(() => [
  { id: 'all', name: t('news.categories.all') },
  { id: 'company', name: t('news.categories.company') },
  { id: 'product', name: t('news.categories.product') },
])

// 当前选中的分类
const currentCategory = ref('all')

// 新闻列表数据
const newsList = ref([
  {
    id: 2,
    title: 'Aurora发布重要更新',
    summary: 'Aurora平台最新版本发布，带来多项重要功能更新和性能优化...',
    image: '/src/assets/images/news1.jpg',
    date: '2024-01-20',
    categoryName: computed(() => t('news.categories.product')),
    category: 'product',
  },
  {
    id: 2,
    title: 'Aurora发布重要更新',
    summary: 'Aurora平台最新版本发布，带来多项重要功能更新和性能优化...',
    image: '/src/assets/images/news1.jpg',
    date: '2024-01-20',
    categoryName: computed(() => t('news.categories.product')),
    category: 'product',
  },
  {
    id: 1,
    title: '2024年度回顾',
    summary: '回顾2024年我们的发展趋势，探讨我们开发的最新进展...',
    image: '/src/assets/images/news2.jpg',
    date: '2024-01-18',
    categoryName: computed(() => t('news.categories.company')),
    category: 'company',
  },
])

// 保存原始新闻数据
const originalNewsList = ref(null)

// 翻译函数
const translateToTraditional = async (text) => {
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
}

// 监听语言变化
watch(
  () => locale.value,
  async (newLocale) => {
    if (newLocale === 'zh-TW') {
      // 只保存和翻译新闻数据
      if (!originalNewsList.value) {
        originalNewsList.value = JSON.parse(JSON.stringify(newsList.value))
      }
      const translatedNews = await Promise.all(
        newsList.value.map(async (news) => ({
          ...news,
          title: await translateToTraditional(news.title),
          summary: await translateToTraditional(news.summary),
        })),
      )
      newsList.value = translatedNews
    } else if (newLocale === 'zh-CN') {
      // 恢复原始简体内容
      if (originalNewsList.value) {
        newsList.value = JSON.parse(JSON.stringify(originalNewsList.value))
      }
    }
  },
  { immediate: true },
)

// 加载状态
const loading = ref(false)

// 切换分类
const changeCategory = (categoryId) => {
  currentCategory.value = categoryId
  // 这里可以添加根据分类获取新闻的逻辑
  loadNews(categoryId)
}

// 加载新闻数据
const loadNews = async (categoryId) => {
  loading.value = true
  try {
    // 模拟API请求延迟
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // 这里可以添加实际的API调用逻辑
    loading.value = false
  } catch (error) {
    console.error('加载新闻失败:', error)
    loading.value = false
  }
}

const filteredNewsList = computed(() => {
  if (currentCategory.value === 'all') {
    return newsList.value
  } else if (currentCategory.value === 'company') {
    return newsList.value.filter((news) => news.category === 'company')
  } else if (currentCategory.value === 'product') {
    return newsList.value.filter((news) => news.category === 'product')
  }
  return []
})

onMounted(() => {
  loadNews(currentCategory.value)
})
</script>

<style scoped>
.news-container {
  width: 100%;
  min-height: 100vh;
  background-color: #1a1a1a;
  color: #e0e0e0;
  padding: 40px 5%;
}

.news-categories {
  max-width: 1400px;
  margin: 20px auto 30px;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid #333;
  padding-bottom: 15px;
}

.category-item {
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
  color: #e0e0e0;
}

.category-item:hover {
  background-color: #333;
}

.category-item.active {
  background-color: #ff6b00;
  color: white;
}

.news-list {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.news-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #242424;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.news-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 107, 0, 0.2);
}

.news-image {
  flex: 0 0 200px;
  height: 150px;
  overflow: hidden;
  border-radius: 4px;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-content {
  flex: 1;
}

.news-title {
  margin: 0 0 10px;
  font-size: 1.25rem;
  color: #ff6b00;
}

.news-summary {
  margin: 0 0 15px;
  color: #b0b0b0;
  line-height: 1.5;
}

.news-meta {
  display: flex;
  gap: 15px;
  color: #808080;
  font-size: 0.875rem;
}

.loading {
  text-align: center;
  padding: 40px 0;
  color: #b0b0b0;
}

.spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto 10px;
  border: 3px solid #333;
  border-top: 3px solid #ff6b00;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.no-data {
  text-align: center;
  padding: 40px 0;
  color: #808080;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .news-container {
    padding: 20px 15px;
  }

  .news-item {
    flex-direction: column;
  }

  .news-image {
    flex: 0 0 auto;
    height: 200px;
  }

  .news-categories {
    overflow-x: auto;
    padding-bottom: 10px;
  }

  .category-item {
    white-space: nowrap;
  }
}
</style>

<script>
export default {
  name: 'News',
}
</script>
