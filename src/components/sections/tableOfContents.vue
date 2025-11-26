<script setup>
defineProps({
  headers: Array // Expects [{ id: 'intro', text: 'Introduction' }, ...]
})
</script>

<template>
  <nav class="sticky top-24 p-6 bg-[#1e293b]/50 backdrop-blur border border-slate-700/50 rounded-xl">
    <h3 class="text-white font-mono font-bold mb-4 uppercase tracking-widest text-xs">
      On this page
    </h3>
    
    <ul class="space-y-3">
      <li v-for="header in headers" :key="header.id">
        <a 
          :href="`#${header.id}`" 
          class="text-sm font-mono text-slate-400 hover:text-blue-400 hover:pl-2 transition-all block border-l-2 border-transparent hover:border-blue-500 pl-2"
        >
          {{ header.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>