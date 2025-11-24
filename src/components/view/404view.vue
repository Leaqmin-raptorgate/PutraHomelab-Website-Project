<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- Flex Container to center content horizontally and vertically -->
  <div class="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 space-y-8">
    
    <!-- 1. The Error Code (Big & Glitchy) -->
    <h1 class="text-9xl font-bold font-mono text-slate-800 select-none">
      404
    </h1>

    <!-- 2. The Terminal Message -->
    <div class="space-y-2">
      <div class="bg-red-500/10 border border-red-500/50 rounded p-4 inline-block">
        <p class="font-mono text-red-400 text-sm md:text-base">
          <span class="font-bold">Error:</span> Directory not found.
        </p>
      </div>
      <p class="text-slate-400 font-sans max-w-md mx-auto">
        The path you are trying to access does not exist on this server.
      </p>
    </div>

    <!-- 3. The "Reboot" Button (Go Home) -->
    <RouterLink 
      to="/" 
      class="px-8 py-3 bg-slate-800 text-white rounded hover:bg-slate-700 transition-colors font-mono text-sm flex items-center gap-2"
    >
      <span>>_</span> cd /home
    </RouterLink>

  </div>
</template>