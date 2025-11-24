<script setup>
defineProps({
  title: String,
  subtitle: String,
  // If 'isFlipped' is true, image goes to the Left. If false, Image on Right.
  isFlipped: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section class="max-w-6xl mx-auto px-6 py-20">
    
    <div 
      class="flex flex-col-reverse items-center gap-12 md:gap-20"
      :class="isFlipped ? 'md:flex-row-reverse' : 'md:flex-row'"
    >
      
      <div class="w-full md:w-1/2 space-y-6">
        <div class="text-blue-400 font-mono text-xs font-bold tracking-widest uppercase">
          {{ subtitle }}
        </div>
        
        <h2 class="text-3xl md:text-4xl font-bold font-mono italic text-white leading-tight">
          {{ title }}
        </h2>
        
        <p class="text-slate-400 font-sans leading-relaxed">
          <slot />
        </p>

        <a href="#" class="inline-block border-b border-blue-400 text-blue-400 pb-1 hover:text-white
                            hover:border-white transition-colors text-sm font-mono">
          Read Case Study >
        </a>
      </div>

      <div class="w-full md:w-1/2 flex justify-center">
        <div class="w-full max-w-md aspect-video bg-slate-800 rounded-xl border border-slate-700/50 flex   
                    items-center justify-center relative overflow-hidden group">

          <span class="text-slate-600 font-mono text-sm group-hover:text-blue-400 transition-colors">
            [ Visual_Placeholder ]
          </span>
        </div>
      </div>

    </div>
  </section>
</template>