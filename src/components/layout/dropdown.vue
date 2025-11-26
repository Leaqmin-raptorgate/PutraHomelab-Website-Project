<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="relative h-full flex items-center group cursor-pointer">
    
    <RouterLink 
      :to="item.path" 
      class="font-mono text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1"
      active-class="text-white font-bold"
    >
        {{ item.name }}
      
      <span 
        v-if="item.children" 
        class="text-[10px] transition-transform duration-200 group-hover:rotate-180"
      >
        ▼
      </span>
    </RouterLink>

    <div 
      v-if="item.children"
      class="absolute top-full left-0 w-48 bg-[#1e293b] border border-slate-700 shadow-xl rounded-b-md 
             invisible opacity-0 translate-y-2 
             group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 
             transition-all duration-200 ease-out z-50"
    >
      <div class="py-2 flex flex-col">
        <RouterLink 
          v-for="child in item.children" 
          :key="child.name"
          :to="child.path"
          class="px-4 py-3 text-xs font-mono text-slate-400 hover:text-white 
                 hover:bg-slate-800 transition-colors border-l-2 border-transparent 
                 hover:border-blue-400"
          active-class="text-white border-blue-400 bg-slate-800"
        >
          {{ child.name }}
        </RouterLink>
      </div>
    </div>

  </div>
</template>