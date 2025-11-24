<script setup>
import { RouterLink } from 'vue-router'

const menuItems = [
  { name: 'Articles', path: '/' },
  { name: 'Categories', path: '/categories', hasDropdown: true },
  { name: 'About', path: '/about' }
]
</script>

<template>
  <header class="w-full bg-[#1e293b] text-slate-300 border-b border-slate-700/50">
    <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
      
      <RouterLink to="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <span class="text-3xl font-mono font-bold text-white tracking-tighter">>_</span>
        
        <div class="flex flex-col leading-none">
          <span class="text-xl font-bold font-mono text-white tracking-wide">PUTRA</span>
          <span class="text-[10px] text-slate-400 font-mono">@Homelab.org</span>
        </div>
      </RouterLink>

      <nav class="hidden md:flex items-center gap-8">
        <a 
          v-for="item in menuItems" 
          :key="item.name" 
          href="#" 
          class="text-sm font-mono font-medium hover:text-white transition-colors flex items-center gap-1"
        >
          {{ item.name }}
          <span v-if="item.hasDropdown" class="text-xs ml-1">></span>
        </a>
      </nav>

      <button class="md:hidden text-white">
        <span class="block w-6 h-0.5 bg-white mb-1"></span>
        <span class="block w-6 h-0.5 bg-white mb-1"></span>
        <span class="block w-6 h-0.5 bg-white"></span>
      </button>

    </div>
  </header>
</template>