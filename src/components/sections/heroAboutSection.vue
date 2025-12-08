<script setup>
import neofetch from '/src/components/base/neofetch.vue'
</script>
<template>
  <div class="flex flex-col items-center gap-24 md:flex-row">
    <div class="w-full space-y-4 md:w-1/2">
      <span class="lab-badge text-blue-400"> The Project </span>

      <h1 class="lab-h1">Digital Garden & Documentation.</h1>

      <p class="font-sans text-lg leading-relaxed text-slate-400">
        PutraHomelab is an open documentation project. It serves as a living
        record of my experiments with
        <span class="font-bold text-white">Self-Hosting</span>,
        <span class="font-bold text-white">Linux Administration</span>, and
        <span class="font-bold text-white">Network Security</span>.
      </p>

      <p class="font-sans text-lg leading-relaxed text-slate-400">
        The goal is simple: To document complex systems in a way that is easy to
        understand, reproduce, and improve upon.
      </p>

      <div class="grid grid-cols-2 gap-4 pt-4">
        <div class="lab-card p-4 text-center">
          <div class="font-mono text-2xl font-bold text-white">Debian</div>
          <div class="text-xs tracking-widest text-slate-500 uppercase">
            Core OS
          </div>
        </div>
        <div class="lab-card p-4 text-center">
          <div class="font-mono text-2xl font-bold text-white">Vue 3</div>
          <div class="text-xs tracking-widest text-slate-500 uppercase">
            Frontend
          </div>
        </div>
      </div>
    </div>

    <div
      class="order-first flex w-full justify-center md:order-last md:w-1/2 md:justify-end"
    >
      <neofetch />
    </div>
  </div>
</template>
