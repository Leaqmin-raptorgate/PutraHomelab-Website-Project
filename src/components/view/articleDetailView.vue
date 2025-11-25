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
  <div class="max-w-7xl mx-auto px-22 py-20 min-h-screen">
    
    <header class="text-center max-w-3xl mx-auto mb-16 space-y-6">
      <RouterLink to="/articles" class="inline-flex items-center gap-2 text-slate-500 hover:text-white font-mono text-xs mb-4 transition-colors">
        &lt;- Back to Articles
      </RouterLink>

      <h1 class="text-4xl md:text-6xl font-bold font-mono text-white tracking-tighter">
        {{ article.title }}
      </h1>
      
      <div class="flex items-center justify-center gap-4 text-xs font-mono text-slate-400 uppercase tracking-wide">
        <span>{{ article.date }}</span>
        <span class="text-blue-500">|</span>
        <span class="text-blue-400">{ {{ article.category }} }</span>
        <span class="text-blue-500">|</span>
        <span>{{ article.readTime }} read</span>
      </div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
      
      <article class="lg:col-span-3 space-y-8 text-slate-300 font-sans leading-loose text-lg">
        
        <div id="intro">
          <h2 class="text-2xl font-bold font-mono text-white mb-4 italic">Introduction</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Pretium tellus duis 
            convallis tempus leo eu aenean. Iaculis massa nisl malesuada lacinia integer 
            nunc posuere. 
          </p>
        </div>

        <div id="setup">
          <h2 class="text-2xl font-bold font-mono text-white mb-4 italic">The Setup</h2>
          <p>
            Conubia nostra inceptos himenaeos orci varius natoque penatibus.
            Nulla molestie mattis scelerisque maximus eget fermentum odio.
          </p>
          
          <div class="bg-black/50 p-4 rounded-lg border border-slate-700 font-mono text-sm text-green-400 my-6">
            $ sudo apt update && sudo apt upgrade -y
          </div>
        </div>

        <div id="video">
          <h2 class="text-2xl font-bold font-mono text-white mb-4 italic">Video Demo</h2>
          <p class="mb-4">Here is a quick demonstration of the process running on my local machine:</p>
          
          <VideoEmbed url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
        </div>

        <div id="conclusion">
          <h2 class="text-2xl font-bold font-mono text-white mb-4 italic">Conclusion</h2>
          <p>
            Dui felis venenatis ultrices proin libero feugiat tristique. Cubilia curae hac 
            habitasse platea dictumst lorem ipsum.
          </p>
        </div>

      </article>

      <aside class="hidden lg:block lg:col-span-1">
        <TableOfContents :headers="article.toc" />
      </aside>

    </div>

  </div>
</template>