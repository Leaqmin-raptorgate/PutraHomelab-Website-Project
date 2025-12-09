<script setup>
defineProps({
  title: String,
  subtitle: String,
  // If 'isFlipped' is true, image goes to t'/src/assets/pictures/elaina chill 1.png'he Left. If false, Image on Right.
  isFlipped: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <section class="lab-section">
    <div
      class="flex flex-col-reverse items-center gap-12 md:gap-20"
      :class="isFlipped ? 'md:flex-row-reverse' : 'md:flex-row'"
    >
      <div class="w-full space-y-6 md:w-1/2">
        <div class="lab-badge text-blue-400">
          {{ subtitle }}
        </div>

        <h2 class="lab-h1 text-3xl md:text-4xl">
          {{ title }}
        </h2>

        <p class="font-sans leading-relaxed text-slate-400">
          <slot />
        </p>

        <RouterLink
          to="/articles/demo"
          class="inline-block border-b border-blue-400 pb-1 font-mono text-sm text-blue-400 transition-colors hover:border-white hover:text-white"
        >
          Read Case Study >
        </RouterLink>
      </div>

      <div class="flex w-full justify-center md:w-1/2">
        <div
          class="group relative flex aspect-video w-full max-w-md items-center justify-center overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800"
        >
          <img
            src="/src/assets/pictures/elaina chill 1.png"
            alt="[Feature Image placeholder]"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  </section>
</template>
