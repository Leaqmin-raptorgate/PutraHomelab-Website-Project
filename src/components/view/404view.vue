<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- Flex Container to center content horizontally and vertically -->
  <div
    class="flex min-h-[60vh] flex-col items-center justify-center space-y-8 px-4 text-center"
  >
    <!-- 1. The Error Code (Big & Glitchy) -->
    <h1 class="font-mono text-9xl font-bold text-slate-800 select-none">404</h1>

    <!-- 2. The Terminal Message -->
    <div class="space-y-2">
      <div
        class="inline-block rounded border border-red-500/50 bg-red-500/10 p-4"
      >
        <p class="font-mono text-sm text-red-400 md:text-base">
          <span class="font-bold">Error:</span> Directory not found.
        </p>
      </div>
      <p class="mx-auto max-w-md font-sans text-slate-400">
        The path you are trying to access does not exist on this server.
      </p>
    </div>

    <!-- 3. The "Reboot" Button (Go Home) -->
    <RouterLink
      to="/"
      class="flex items-center gap-2 rounded bg-slate-800 px-8 py-3 font-mono text-sm text-white transition-colors hover:bg-slate-700"
    >
      <span>>_</span> cd /home
    </RouterLink>
  </div>
</template>
