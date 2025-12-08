<script setup>
import ArticleCard from '/src/components/cards/articleCard.vue'

//Temporary static data
const articles = [
  {
    id: 1,
    category: 'Linux',
    title: 'Why I switched to Debian Stable',
    date: '2025-11-20',
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
    <div class="mb-8 flex items-end justify-between">
      <h2 class="lab-h1 text-2xl md:text-3xl">
        Latest Articles <span class="animate-pulse text-red-500">.</span>
      </h2>

      <a
        href="/articles"
        class="mb-1 font-mono text-sm text-slate-400 hover:text-white md:text-base"
      >
        View All >
      </a>
    </div>

    <div
      class="scrollbar-hide -mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-8 md:mx-0 md:px-0"
    >
      <div
        v-for="item in articles"
        :key="item.id"
        class="scrollbar-hide w-[85vw] flex-none snap-center sm:w-80 md:w-96"
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
