<script setup>
import { RouterLink } from 'vue-router'
import VideoEmbed from '@/components/base/videoEmbedded.vue'
import TableOfContents from '@/components/sections/tableOfContents.vue'

// DUMMY DATA
const article = {
  title: '#Title#',
  date: '25-11-2025',
  category: 'Linux',
  readTime: '5 min',
  // TOC dummy
  toc: [
    { id: 'intro', text: 'Introduction' },
    { id: 'setup', text: 'The Setup' },
    { id: 'video', text: 'Video Demo' },
    { id: 'conclusion', text: 'Conclusion' }
  ]
}
</script>

<template>
  <div class="mx-auto min-h-screen max-w-7xl px-6 py-20 md:px-22">
    <header class="mx-auto mb-16 max-w-3xl space-y-6 text-center">
      <RouterLink
        to="/articles"
        class="mb-4 inline-flex items-center gap-2 font-mono text-xs text-slate-500 transition-colors hover:text-white"
      >
        &lt;- Back to Articles
      </RouterLink>

      <h1
        class="font-mono text-4xl font-bold tracking-tighter text-white md:text-6xl"
      >
        {{ article.title }}
      </h1>

      <div
        class="flex items-center justify-center gap-4 font-mono text-xs tracking-wide text-slate-400 uppercase"
      >
        <span>{{ article.date }}</span>
        <span class="text-blue-500">|</span>
        <span class="text-blue-400">{ {{ article.category }} }</span>
        <span class="text-blue-500">|</span>
        <span>{{ article.readTime }} read</span>
      </div>
    </header>

    <div class="relative grid grid-cols-1 gap-12 lg:grid-cols-4">
      <article
        class="space-y-8 font-sans text-lg leading-loose text-slate-300 lg:col-span-3"
      >
        <div>
          <h2
            class="mb-4 font-mono text-2xl font-bold text-white italic"
            id="intro"
          >
            Introduction
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Pretium
            tellus duis convallis tempus leo eu aenean. Iaculis massa nisl
            malesuada lacinia integer nunc posuere.
          </p>
        </div>

        <div id="setup">
          <h2 class="mb-4 font-mono text-2xl font-bold text-white italic">
            The Setup
          </h2>
          <p>
            Conubia nostra inceptos himenaeos orci varius natoque penatibus.
            Nulla molestie mattis scelerisque maximus eget fermentum odio.
          </p>

          <div
            class="my-6 rounded-lg border border-slate-700 bg-black/50 p-4 font-mono text-sm text-green-400"
          >
            $ sudo apt update && sudo apt upgrade -y
          </div>
        </div>

        <div id="video">
          <h2 class="mb-4 font-mono text-2xl font-bold text-white italic">
            Video Demo
          </h2>
          <p class="mb-4">
            Here is a quick demonstration of the process running on my local
            machine:
          </p>

          <VideoEmbed url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        </div>

        <div id="conclusion">
          <h2 class="mb-4 font-mono text-2xl font-bold text-white italic">
            Conclusion
          </h2>
          <p>
            Dui felis venenatis ultrices proin libero feugiat tristique. Cubilia
            curae hac habitasse platea dictumst lorem ipsum.
          </p>
        </div>
      </article>

      <aside class="hidden lg:col-span-1 lg:block">
        <TableOfContents :headers="article.toc" />
      </aside>
    </div>
  </div>
</template>
