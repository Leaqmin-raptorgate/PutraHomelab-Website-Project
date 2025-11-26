<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { articles } from '@/assets/data/articles.js' // Import your database
import VideoEmbed from '@/components/base/videoEmbedded.vue'
import TableOfContents from '@/components/sections/tableOfContents.vue'

const route = useRoute()

// 1. FIND THE ARTICLE
// We look inside 'articles' for the item where id matches the URL
const article = computed(() => {
  const id = parseInt(route.params.id)
  return articles.find(a => a.id === id) || null
})

// 2. SAFETY CHECK
// If article isn't found (e.g. /post/999), we provide fallback data so the page doesn't crash
const displayData = computed(() => {
  if (article.value) return article.value
  
  return {
    title: 'Article Not Found',
    date: '---',
    category: 'Error',
    readTime: '0 min'
  }
})

// Hardcoded TOC for the design demo (since we don't have real markdown content yet)
const toc = [
    { id: 'intro', text: 'Introduction' },
    { id: 'setup', text: 'The Setup' },
    { id: 'video', text: 'Video Demo' },
    { id: 'conclusion', text: 'Conclusion' }
]
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 md:px-22 py-20 min-h-screen">
    
    <div class="max-w-7xl mx-auto px-6 md:px-22 py-20 min-h-screen">
      
      <header class="text-center max-w-3xl mx-auto mb-16 space-y-6">
        <RouterLink to="/articles" class="inline-flex items-center gap-2 text-slate-500 hover:text-white 
                                          font-mono text-xs mb-4 transition-colors">
          &lt;- Back to Articles
        </RouterLink>

        <h1 class="lab-h1">
          {{ displayData.title }}
        </h1>
        
        <div class="flex items-center justify-center gap-4 text-xs font-mono text-slate-400 uppercase tracking-wide">
          <span>{{ displayData.date }}</span>
          <span class="text-blue-500">|</span>
          <span class="text-blue-400">{ {{ displayData.category }} }</span>
        </div>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
          <aside class="hidden lg:block lg:col-span-1 order-last">
              <TableOfContents :headers="toc" />
          </aside>
          
          <article class="lg:col-span-3 space-y-8 text-slate-300 font-sans leading-loose text-lg">
              </article>
      </div>
    </div>
  </div>
</template>