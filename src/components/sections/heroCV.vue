<script setup>
import heroCVimage from '/src/assets/pictures/memakkah.JPG'
</script>
<template>
  <section class="lab-section">
    <div class="flex flex-col items-center gap-10 md:flex-row">
      <div class="order-last w-full space-y-6 md:order-first md:w-1/2">
        <h1 class="lab-h1 sm:text-center">Muhammad Aditya Putra</h1>
        <h2 class="sm:text-center">11241050 - Informatika - Institut Teknologi Kalimantan </h2>

        <p
          class="max-w-md font-sans text-sm leading-relaxed text-slate-400 md:text-base sm:justify-center sm:text-center"
        >
          Hello! Im Muhammad Aditya Putra, you can call me Adit. I'm a second-year student in Institute Technology Kalimantan.
          My hoby is thinkering things that i'm curious on especially Networking, Hardware, Linux related. Personally using
        </p>
      </div>

      <div
        class="md:justify md:flex w-full justify-center md:w-1/2 md:justify-end hidden hover:scale-110"
      >
        <img
          :src="heroCVimage"
          alt="linux server illustration"
          class="h-auto w-full max-w-sm rounded-xl object-cover shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>
