<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ArticleRow from '../cards/articleRow.vue'
import { articles } from '@/assets/data/articles.js' 
// Note: I assumed you put the articles array in 'dropdownData.js' or 'articles.js'. 
// If you created a separate 'src/data/articles.js', import from there.
// Based on our last step, it should be: import { articles } from '@/data/articles.js'

const route = useRoute()

// 1. READ THE URL
// If URL is /articles/linux, this becomes 'linux'
const categorySlug = computed(() => {
  return route.params.category
})

// 2. FILTER THE DATA
const categoryArticles = computed(() => {
  // Safety check: if no category, return empty or all
  if (!categorySlug.value) return []
  
  return articles.filter(article => 
    // Compare lowercase to match 'Linux' with 'linux'
    article.category.toLowerCase() === categorySlug.value.toLowerCase()
  )
})

// 3. DYNAMIC TITLE
const pageTitle = computed(() => {
  // Capitalize the first letter for display (linux -> Linux)
  return categorySlug.value.charAt(0).toUpperCase() + categorySlug.value.slice(1)
})
</script>

<template>
  <div class="lab-article-section">
    <div>

        <h1 class="lab-h1 text-3xl md:text-5xl">
            # {{ pageTitle }} Articles
        </h1>

        <h2 class="text-slate-400 font-mono text-sm md:text-base mt-2 mb-8">
            A collection of content regarding {{ pageTitle }}.
        </h2>
        
        <div class="flex flex-col gap-8">
          <ArticleRow 
              v-for="post in categoryArticles" 
              :key="post.id"
              :category="post.category"
              :title="post.title"
              :excerpt="post.excerpt"
              :date="post.date"
              image="" 
          />
          
          <div v-if="categoryArticles.length === 0" class="text-slate-500 font-mono italic py-10">
            No articles found in this category yet.
          </div>
        </div>

    </div>
  </div>
</template>