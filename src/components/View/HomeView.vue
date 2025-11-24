<template>
  <div class="min-h-screen p-8 relative overflow-hidden">
    
    <div class="absolute inset-0 grid grid-cols-6 gap-4 opacity-5 pointer-events-none px-8">
      <div v-for="n in 6" :key="n" class="bg-white/10 h-full w-full"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto mt-20">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6">
          <div class="text-4xl md:text-6xl font-bold tracking-tighter italic">
            Title - Website<br>
            Headline
          </div>
          
          <p class="text-gray-400 max-w-md text-sm md:text-base leading-relaxed">
            Normal Text, For detail description of this website.
            Doubles as my personal portfolio as a linux user interested in homelab.
          </p>

          <button class="mt-4 px-6 py-3 border border-gray-600 text-gray-300 rounded hover:bg-white hover:text-black transition-colors cursor-pointer">
            Get Started!
          </button>
        </div>

        <div class="flex justify-center md:justify-end">
          <div class="relative w-full max-w-md aspect-video bg-blue-900/30 rounded-xl border border-blue-500/30 flex items-center justify-center">
            <span class="text-blue-400 animate-pulse">
              [ Insert Server Image Here ]
            </span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>