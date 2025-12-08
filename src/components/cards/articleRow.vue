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
  <article
    class="group lab-card relative flex flex-col overflow-hidden md:h-64 md:flex-row"
  >
    <div class="relative w-full overflow-hidden bg-slate-800 md:w-1/3">
      <div
        class="lab-icon-circle absolute top-4 left-4 bg-blue-600 shadow-lg shadow-blue-900/20"
      ></div>

      <img
        v-if="image"
        :src="image"
        alt="Thumbnail"
        class="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
      />
      <div
        v-else
        class="h-full w-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] opacity-10"
      ></div>
    </div>

    <div class="flex w-full flex-col justify-center p-6 md:w-2/3 md:p-8">
      <div class="lab-badge mb-3 text-blue-400">
        {{ category }}
      </div>

      <h3
        class="mb-3 font-mono text-2xl font-bold text-white italic transition-colors group-hover:text-blue-300"
      >
        {{ title }}
      </h3>

      <p
        class="mb-6 line-clamp-2 font-sans text-sm leading-relaxed text-slate-400 md:line-clamp-none"
      >
        {{ excerpt }}
      </p>

      <div class="mt-auto w-full border-t border-slate-700/50 pt-4">
        <span class="font-mono text-xs font-bold text-slate-500">
          Date: {{ date }}
        </span>
      </div>
    </div>
  </article>
</template>
