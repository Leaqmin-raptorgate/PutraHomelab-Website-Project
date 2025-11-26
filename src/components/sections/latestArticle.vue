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
  <section class="lab-section overflow-hidden">
    
    <div class="flex items-end justify-between mb-8">

      <h2 class="lab-h1 text-2xl md:text-3xl">
        Latest Articles <span class="text-red-500 animate-pulse">.</span>
      </h2>

      <a href="/articles" class= "mb-1
                                  font-mono text-sm md:text-base 
                                text-slate-400 
                                hover:text-white">
        View All >
      </a>

    </div>

    <div class=  "-mx-6 px-6 gap-6 flex 
                  overflow-x-auto pb-8 
                  snap-x snap-mandatory 
                  md:mx-0 md:px-0
                  scrollbar-hide">
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