<script setup>
import ArticleRow from '../cards/articleRow.vue'

// Dummy Data
const allArticles = [
  { 
    id: 1, 
    category: 'Linux', 
    title: 'Why I switched to Debian Stable', 
    excerpt: 'Lorem ipsum dolor amet tolong siapa disini makan ayam goreng berlapis lapis kayak ketabrak truck kun.', 
    date: '20-11-2025' 
  },
  { 
    id: 2, 
    category: 'Hardware', 
    title: 'Building a silent Home Server', 
    excerpt: 'Fan curves, undervolting, and choosing the right case for a server that sleeps in your bedroom.', 
    date: '18-11-2025' 
  },
  { 
    id: 3, 
    category: 'Docker', 
    title: 'Containerizing your life', 
    excerpt: 'How to move your entire digital footprint into portable containers and never look back.', 
    date: '15-11-2025' 
  },
  { 
    id: 4, 
    category: 'Network', 
    title: 'The basics of Subnetting', 
    excerpt: 'It is actually easier than you think. Here is a guide to organizing your home IP addresses.', 
    date: '10-11-2025' 
  }
]

console.log('allArticles length:', allArticles.length, allArticles)
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 py-20 min-h-screen">
    <div class="mb-4">
      <span class="text-slate-400">Debug: articles = {{ allArticles.length }}</span>
    </div>

    <div class="flex flex-col gap-8">
      <ArticleRow 
        v-for="post in allArticles" 
        :key="post.id"
        :category="post.category"
        :title="post.title"
        :excerpt="post.excerpt"
        :date="post.date"
        image="" 
      />
    </div>
  </div>
</template>