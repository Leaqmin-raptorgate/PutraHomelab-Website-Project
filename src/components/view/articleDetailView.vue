<script setup>
import { RouterLink } from 'vue-router'
import VideoEmbed from '@/components/base/videoEmbedded.vue'
import TableOfContents from '@/components/sections/tableOfContents.vue'

// DUMMY DATA
const article = {
  title: 'Setting Up a Personal Linux Server: A Step-by-Step Guide',
  date: '25-11-2025',
  category: 'Linux',
  readTime: '10 min',

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
        class="font-mono text-4xl font-bold tracking-tighter text-white"
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
        <div id="intro">
          <h2 class="mb-4 font-mono text-2xl font-bold text-white italic">
            Introduction
          </h2>
          <p>
            Welcome to this comprehensive guide on setting up your very own
            personal Linux server! Whether you're a seasoned sysadmin or a
            curious beginner, this article will walk you through the essential
            steps to get your server up and running. From selecting the right hardware
            to installing the operating system and configuring services, we've got
            you covered.
          </p>
        </div>

        <div id="setup">
          <h2 class="mb-4 font-mono text-2xl font-bold text-white italic">
            The Setup
          </h2>
          <p>
            Building a home server starts with a solid foundation. Once you have installed your Linux distribution of choice (I recommend Debian or 
            Ubuntu Server for stability), the first thing you need to do is ensure your package repositories are up to date 
          </p>
          <p>
            Open your terminal and run the following command to update your package lists and upgrade existing packages:
          </p>
          <div
            class="my-6 rounded-lg border border-slate-700 bg-black/50 p-4 font-mono text-sm text-green-400"
          >
            $ sudo apt update && sudo apt upgrade -y
          </div>
          <p>
            This command ensures that your system has the latest package information and applies any available updates, keeping your server secure and up to date.
          </p>
        </div>

        <div id="video">
          <h2 class="mb-4 font-mono text-2xl font-bold text-white italic">
            Video Demo
          </h2>
          <p class="mb-4">
            Here is a video a person explaining homelab server setup (credit to hardwarehaven!):
          </p>
          <VideoEmbed/>
        </div>

        <div id="conclusion">
          <h2 class="mb-4 font-mono text-2xl font-bold text-white italic">
            Conclusion
          </h2>
          <p>
            Setting up a personal Linux server is a rewarding journey that teaches you the fundamentals of 
            system administration and networking. While the command line might 
            seem intimidating at first, it offers unparalleled control over your digital environment. 
            Whether you plan to host a simple static website or a complex array of Docker containers, the skills you learn here are the 
            building blocks of modern IT infrastructure. Stay tuned for the 
            next article where we will cover setting up a reverse proxy with Nginx!
          </p>
        </div>
      </article>

      <aside class="hidden lg:col-span-1 lg:block">
        <TableOfContents :headers="article.toc" />
      </aside>
    </div>
  </div>
</template>
