<script setup>
defineProps({
  headers: Array
})
</script>

<template>
  <nav
    class="bg-lab-surface/50 sticky top-24 rounded-xl border border-slate-700/50 p-6 backdrop-blur"
  >
    <h3
      class="mb-4 font-mono text-xs font-bold tracking-widest text-white uppercase"
    >
      On this page
    </h3>

    <ul class="space-y-3">
      <li v-for="header in headers" :key="header.id">
        <a
          :href="`#${header.id}`"
          class="block border-l-2 border-transparent pl-2 font-mono text-sm text-slate-400 transition-all hover:border-blue-500 hover:pl-2 hover:text-blue-400"
        >
          {{ header.text }}
        </a>
      </li>
    </ul>
  </nav>
</template>
