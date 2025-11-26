<script setup>
import bioImage from '@/assets/pictures/elaina chill 1.png'
import { RouterLink } from 'vue-router'; 
</script>

<template>
  <div class="max-w-4xl mx-auto px-6 py-20 min-h-[80vh] flex flex-col justify-center">
    
    <!-- 1. TOP SECTION (Avatar + Title) -->
    <!-- flex-col on mobile, flex-row on desktop -->
    <div class="flex flex-col md:flex-row items-center gap-10 md:gap-16 justify-center">
      
      <!-- AVATAR CIRCLE -->
      <!-- We create a 'fake' circle background with Tailwind -->
      <div class="relative group">
        <!-- The Blue Glow Circle -->
        <div class="absolute inset-0 bg-blue-600/20 blur-xl rounded-full transform group-hover:bg-blue-600/30 transition-all duration-500"></div>
        
        <!-- The Image Container -->
        <div class="relative w-48 h-48 md:w-64 md:h-64 bg-[#151b2e] border border-blue-500/30 rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
          <img 
            :src="bioImage" 
            alt="Profile Avatar" 
            class="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
          />
        </div>
      </div>

      <!-- TEXT CONTENT -->
      <div class="text-center md:text-left space-y-2">
        <h1 class="text-4xl md:text-5xl font-bold font-mono text-white tracking-tight">
          Name why
        </h1>
        <p class="text-slate-400 font-mono text-sm tracking-widest uppercase">
          Description
        </p>
      </div>

    </div>

    <!-- 2. BOTTOM SECTION (The Monospace Text) -->
    <!-- mt-24 adds the big gap shown in your design -->
    <div class="mt-24 text-center space-y-4">
      <p class="font-mono text-slate-300 text-lg md:text-xl italic leading-relaxed">
        Lorep ipsum dolor amet tolong siapa disini makan
      </p>
      <p class="font-mono text-slate-300 text-lg md:text-xl italic leading-relaxed">
        ayam goreng berlapis lapis kayak ketabrak ......
      </p>
      <p class="font-mono text-slate-300 text-lg md:text-xl italic leading-relaxed">
        Lorep ipsum dolor amet tolong siapa disini makan
      </p>
      <p class="font-mono text-slate-300 text-lg md:text-xl italic leading-relaxed">
        ayam goreng berlapis lapis kayak ketabrak ......
      </p>
    </div>

  </div>
</template>