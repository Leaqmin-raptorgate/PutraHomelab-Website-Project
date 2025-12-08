<script setup>
import ArticleRow from '../cards/articleRow.vue'
import { articles } from '/src/assets/data/articles.js'
</script>

<template>
  <div class="lab-section">
    <div>
      <h1 class="lab-h1 text-3xl md:text-5xl"># Articles section</h1>

      <h2 class="mt-2 mb-8 font-mono text-sm text-slate-400 md:text-base">
        A collection of written content covering various topics related to
        technology, self-hosting, and more.
      </h2>

      <div class="flex flex-col gap-8">
        <ArticleRow
          v-for="post in articles"
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
