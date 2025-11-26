<script setup>
import ArticleRow from '../cards/articleRow.vue'
import { articles } from '@/assets/data/articles.js'
</script>

<template>
  <div class="lab-article-section">
    <div>
        <h1 class="lab-h1 text-3xl md:text-5xl">
            # All Articles
        </h1>

        <h2 class="text-slate-400 font-mono text-sm md:text-base mt-2 mb-8">
            A collection of written content covering various topics related to technology, self-hosting, and more.
        </h2>
        
        <div class="flex flex-col gap-8">
        <ArticleRow 
            v-for="post in articles" 
            :key="post.id"
            :id="post.id"  :category="post.category"
            :title="post.title"
            :excerpt="post.excerpt"
            :date="post.date"
            image="" 
        />
        </div>
    </div>
  </div>
</template>