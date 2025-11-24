<script setup>
import { navItems } from '@/assets/data/dropdownData.js'
import NavBarItem from '@/components/layout/dropdown.vue'
import router from '../router';
</script>

<template>
  <header class="w-full bg-[#1e293b] border-b border-slate-700/50 sticky top-0 z-50 shadow-xl shadow-black/10">

    <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
      
      <router-link to="/">
        <img 
          class="w-38 h-auto -ml-6 md:w-44" 
          src="/src/assets/pictures/logo/logoWeb.png" 
          alt="WebLogo" 
        />
      </router-link>

      <nav class="hidden md:flex items-center gap-8 h-full">
        <NavBarItem 
          v-for="nav in navItems" 
          :key="nav.name" 
          :item="nav" 
        />
      </nav>

      <button class="text-white md:hidden">
         Menu
      </button>

    </div>

  </header>
</template>