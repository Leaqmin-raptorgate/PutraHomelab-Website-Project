<script setup>
import ArticleCard from '/src/components/cards/articleCard.vue'
import { articles } from '/src/assets/data/articles.js'
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
      class="scrollbar-hide -mx-6 flex gap-6 overflow-x-auto px-6 pb-8 md:mx-0 md:px-0"
    >
      <div
        v-for="item in articles"
        :key="item.id"
        class="w-[85vw] flex-none sm:w-80 md:w-96"
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
