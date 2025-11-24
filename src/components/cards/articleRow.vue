<script setup>
// Define what data this card needs to receive from the parent
defineProps({
  category: String,
  title: String,
  date: String,
  excerpt: String,
  image: String,
  // img icon later
  iconName: String 
})
</script>

<template>
  <article class="group relative flex flex-col md:flex-row bg-[#1e293b] border border-slate-700/50 rounded-xl overflow-hidden hover:bg-slate-800 hover:border-slate-600 hover:shadow-xl transition-all duration-300 cursor-pointer md:h-64">
    
    <div class="w-full md:w-1/3 relative bg-slate-800 overflow-hidden">
      
      <div class="absolute top-4 left-4 w-8 h-8 rounded-full bg-red-600 shadow-lg shadow-red-900/20 z-10 group-hover:scale-110 transition-transform"></div>
      
      <img 
        v-if="image" 
        :src="image" 
        alt="Thumbnail" 
        class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
      />
      <div v-else class="w-full h-full opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

    </div>

    <div class="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
      
      <div class="font-mono text-xs font-bold text-blue-400 mb-3 tracking-wide uppercase">
        {{ category }}
      </div>

      <h3 class="text-2xl font-bold font-mono italic text-white mb-3 group-hover:text-blue-300 transition-colors">
        {{ title }}
      </h3>
      
      <p class="text-slate-400 font-sans text-sm leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
        {{ excerpt }}
      </p>

      <div class="mt-auto pt-4 border-t border-slate-700/50 w-full">
        <span class="font-mono text-xs font-bold text-slate-500">
          Date: {{ date }}
        </span>
      </div>

    </div>

  </article>
</template>