<script setup>
import bioImage from '/src/assets/pictures/memakkah.JPG'
</script>
<template>
  <div class="border-t border-slate-700/50 pt-20">
    <div
      class="mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row"
    >
      <div class="group relative shrink-0">
        <div
          class="absolute inset-0 transform rounded-full bg-blue-600/20 blur-xl transition-all duration-500 group-hover:bg-blue-600/30"
        ></div>
        <img
          :src="bioImage"
          alt="Putra"
          class="relative h-40 w-40 rounded-full border-2 border-slate-700 object-cover shadow-2xl transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div class="space-y-4 text-center md:text-left">
        <div class="lab-badge text-blue-400">The Maintainer</div>

        <h2 class="font-mono text-3xl font-bold text-white">Hi, I'm Putra.</h2>

        <p class="font-sans leading-relaxed text-slate-400">
          I am a Computer Science student based in Indonesia with a passion for
          System Administration and Homelabs. I built this site to force myself
          to learn by teaching.
        </p>

        <p class="font-mono text-sm text-slate-500 italic">
          "I break things so I can learn how it works and fix em."
        </p>

        <div class="flex justify-center gap-4 pt-2 md:justify-start">
          <a href="https://github.com/Leaqmin-raptorgate" class="text-slate-400 transition-colors hover:text-white"
            >GitHub</a
          >
          <span class="text-slate-700">•</span>
          <a href="https://www.linkedin.com/in/muhammad-aditya-putra-14a29637b/" class="text-slate-400 transition-colors hover:text-white"
            >LinkedIn</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
