<script setup>
import ArticleCard from '/src/components/cards/articleCard.vue'

//Temporary static data 
const articles = [
  { 
    id: 1, 
    category: 'Linux', 
    title: 'Why I switched to Debian Stable', 
    date: '2025-11-20' ,
    iconName: 'linux'
  },
  { 
    id: 2, 
    category: 'Hardware', 
    title: 'Lenovo M720T: The Perfect Home Server?', 
    date: '2025-11-18',
    iconName: 'hardware'
  },
  { 
    id: 3, 
    category: 'Network', 
    title: 'Understanding VLANs without a degree', 
    date: '2025-11-15',
    iconName: 'network'
  },
  { 
    id: 4, 
    category: 'self-hosting', 
    title: 'Self-hosting Nextcloud: A tragedy in 3 acts', 
    date: '2025-11-10',
    iconName: 'self-hosting'
  }
]
</script>

<template>
  <section class="max-w-6xl mx-auto px-6 py-20 overflow-hidden">
    
    <div class="flex items-end justify-between mb-8">
      <h2 class="text-2xl md:text-3xl font-bold font-mono italic text-white">
        Latest Articles <span class="text-red-500 animate-pulse">.</span>
      </h2>
      <a href="/articles" class="text-xs md:text-base text-sm font-mono text-slate-400 hover:text-white mb-1 ">
        View All >
      </a>
    </div>

    <div class="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide">
        <div 
        v-for="item in articles"
        :key="item.id"
        class="flex-none w-[85vw] sm:w-80 md:w-96 snap-center scrollbar-hide"
        >
        <ArticleCard 
            :image="item.image || ''"
            :category="item.category"
            :title="item.title"
            :date="item.date"
            :icon-name="item.iconName"
            />
      </div>
    </div>

  </section>
</template>