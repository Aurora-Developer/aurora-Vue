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
        <div v-for="news in newsList" :key="news.id" class="news-item">
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

      <div v-if="!loading && newsList.length === 0" class="no-data">暂无相关新闻</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// 新闻分类数据
const categories = ref([
  { id: 'all', name: '全部' },
  { id: 'company', name: '最新动态' },
  { id: 'product', name: '产品更新' },
])

// 当前选中的分类
const currentCategory = ref('all')

// 新闻列表数据
const newsList = ref([
  {
    id: 1,
    title: 'Aurora发布重要更新',
    summary: 'Aurora平台最新版本发布，带来多项重要功能更新和性能优化...',
    image: '/src/assets/images/news1.jpg',
    date: '2024-01-20',
    categoryName: '产品更新',
    category: 'product',
  },
  {
    id: 1,
    title: 'Aurora发布重要更新',
    summary: 'Aurora平台最新版本发布，带来多项重要功能更新和性能优化...',
    image: '/src/assets/images/news1.jpg',
    date: '2024-01-20',
    categoryName: '产品更新',
    category: 'product',
  },
  {
    id: 2,
    title: '2024年度技术展望',
    summary: '展望2024年技术发展趋势，探讨AI、云计算等领域的最新进展...',
    image: '/src/assets/images/news2.jpg',
    date: '2024-01-18',
    categoryName: '行业资讯',
    category: 'industry',
  },
])

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
