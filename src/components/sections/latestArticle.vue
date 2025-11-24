<script setup>
import ArticleCard from '/src/components/cards/articleCards.vue'

// This is our "Fake Database"
// In the future, this might come from an API or Markdown files
const articles = [
  { 
    id: 1, 
    category: 'Linux', 
    title: 'Why I switched to Debian Stable', 
    date: '2025-11-20' 
  },
  { 
    id: 2, 
    category: 'Hardware', 
    title: 'Lenovo M720T: The Perfect Home Server?', 
    date: '2025-11-18' 
  },
  { 
    id: 3, 
    category: 'Network', 
    title: 'Understanding VLANs without a degree', 
    date: '2025-11-15' 
  },
  { 
    id: 4, 
    category: 'Docker', 
    title: 'Self-hosting Nextcloud: A tragedy in 3 acts', 
    date: '2025-11-10' 
  }
]
</script>

<template>
  <section class="max-w-6xl mx-auto px-6 py-20">
    
    <div class="flex items-end justify-between mb-8">
      <h2 class="text-3xl font-bold font-mono italic text-white">
        Latest Articles <span class="text-red-500 animate-pulse">.</span>
      </h2>
      <a href="#" class="text-sm font-mono text-slate-400 hover:text-white mb-1">
        View All >
      </a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      <ArticleCard 
        v-for="item in articles" 
        :key="item.id"
        :category="item.category"
        :title="item.title"
        :date="item.date"
      />

    </div>

  </section>
</template>