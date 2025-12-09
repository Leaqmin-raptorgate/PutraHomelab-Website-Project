<script setup>
import ArticleRow from '../cards/articleRow.vue'
import { articles } from '/src/assets/data/articles.js'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentCategory = computed(() => route.params.category)

const displayArticles = computed(() => {
  // show all
  if (!currentCategory.value) {
    return articles
  }

  //filter
  return articles.filter(
    (article) =>
      article.category.toLowerCase() === currentCategory.value.toLowerCase()
  )
})

const pageTitle = computed(() => {
  if (currentCategory.value) {
    //(linux -> Linux)
    return `# ${currentCategory.value.charAt(0).toUpperCase() + currentCategory.value.slice(1)} Articles`
  }
  return '# All Articles'
})

// specific category description
const pageDesc = computed(() => {
  if (currentCategory.value) {
    return `A curated list of my content regarding ${currentCategory.value}.`
  }
  return 'A collection of written content covering various topics related to technology, self-hosting, and more.'
})
</script>

<template>
  <div class="lab-section">
    <div>
      <h1 class="lab-h1 text-3xl md:text-5xl">{{ pageTitle }} </h1>

      <h2 class="mt-2 mb-8 font-mono text-sm text-slate-400 md:text-base">
        {{ pageDesc }}
      </h2>

      <div class="flex flex-col gap-8">
        <ArticleRow
          v-for="post in displayArticles"
          :key="post.id"
          :category="post.category"
          :title="post.title"
          :excerpt="post.excerpt"
          :date="post.date"
          :image="post.image"
          :iconName="post.iconName"
        />
      </div>
    </div>
  </div>
</template>
