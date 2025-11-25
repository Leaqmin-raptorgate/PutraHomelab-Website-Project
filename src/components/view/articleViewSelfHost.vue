<script setup>
import ArticleRow from '../cards/articleRow.vue'

// Dummy Data
const allArticles = [
  { 
    id: 1, 
    category: 'Self-Hosting', 
    title: 'Why I switched to Debian Stable', 
    excerpt: 'Lorem ipsum dolor amet tolong siapa disini makan ayam goreng berlapis lapis kayak ketabrak truck kun.', 
    date: '20-11-2025' 
  },
  { 
    id: 2, 
    category: 'Self-Hosting', 
    title: 'Building a silent Home Server', 
    excerpt: 'Fan curves, undervolting, and choosing the right case for a server that sleeps in your bedroom.', 
    date: '18-11-2025' 
  },
  { 
    id: 3, 
    category: 'Self-Hosting', 
    title: 'Containerizing your life', 
    excerpt: 'How to move your entire digital footprint into portable containers and never look back.', 
    date: '15-11-2025' 
  },
  { 
    id: 4, 
    category: 'Self-Hosting', 
    title: 'The basics of Subnetting', 
    excerpt: 'It is actually easier than you think. Here is a guide to organizing your home IP addresses.', 
    date: '10-11-2025' 
  }
]

</script>

<template>
  <div class="max-w-4xl mx-auto px-6 py-20 min-h-screen">
    <div>

        <h1 class="text-4xl md:text-5xl font-bold font-mono italic tracking-tighter leading-tight text-white">
            # Article Self-Host section 
        </h1>

        <h2 class="text-slate-400 font-mono text-sm md:text-base mt-2 mb-8">
            A collection of written content covering various topics related to technology, self-hosting, and more.
        </h2>
        
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
  </div>
</template>