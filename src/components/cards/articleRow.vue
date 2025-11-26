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
  <article class="group relative lab-card
                  flex flex-col md:flex-row
                  overflow-hidden
                  md:h-64
                  ">
    
    <div class="w-full md:w-1/3 relative 
              bg-slate-800 
                overflow-hidden">
      
      <div class="lab-icon-circle 
                bg-blue-600 shadow-blue-900/20 shadow-lg
                  absolute top-4 left-4">
      </div>
      
      <img 
        v-if= "image" 
        :src= "image" 
        alt= "Thumbnail" 
        class= "w-full h-full 
                object-cover opacity-90 
                group-hover:opacity-100 transition-opacity"
      />
      <div v-else class= "w-full h-full 
                          opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] 
                          [background-size:16px_16px]">
      </div>

    </div>

    <div class="w-full p-6 flex flex-col justify-center md:w-2/3 md:p-8">
      
      <div class="lab-badge text-blue-400 mb-3">
        {{ category }}
      </div>

      <h3 class= "text-2xl font-bold font-mono italic 
                text-white mb-3 
                group-hover:text-blue-300 transition-colors">
        {{ title }}
      </h3>
      
      <p class=  "font-sans text-sm leading-relaxed 
                text-slate-400 
                  mb-6 line-clamp-2 
                  md:line-clamp-none">
        {{ excerpt }}
      </p>

      <div class="mt-auto pt-4 border-t w-full
                border-slate-700/50">
        <span class="font-mono text-xs font-bold text-slate-500">
          Date: {{ date }}
        </span>
      </div>

    </div>

  </article>
</template>