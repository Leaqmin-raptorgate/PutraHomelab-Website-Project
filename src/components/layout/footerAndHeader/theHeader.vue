<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import dropdownSection from '@/components/sections/dropdownSection.vue'

// 1. STATE: Tracks if the mobile menu is visible
const isMobileMenuOpen = ref(false)

// 2. ACTION: Toggles the state
const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value

  // Optional: Stop background scrolling when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

// 3. ACTION: Close menu when a link is clicked
const closeMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = 'auto'
}
</script>

<template>
  <header
    class="bg-lab-surface sticky top-0 z-50 w-full border-b border-slate-700/50 shadow-xl shadow-black/40"
  >
    <div class="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
      <div class="relative z-50 flex items-center gap-3">
        <RouterLink to="/" @click="closeMenu">
          <img
            class="-ml-2 h-auto w-32 object-contain md:w-48"
            src="/src/assets/pictures/logo/logoWeb.png"
            alt="PUTRA Logo"
          />
        </RouterLink>
      </div>

      <nav class="hidden h-full items-center gap-8 md:flex">
        <RouterLink
          to="/"
          class="font-mono text-slate-400 transition-colors hover:text-white"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/articles"
          class="font-mono text-slate-400 transition-colors hover:text-white"
        >
          Articles
        </RouterLink>

        <div class="group relative flex h-full cursor-pointer items-center">
          <span
            class="flex items-center gap-1 font-mono text-slate-400 transition-colors hover:text-white"
          >
            Categories
            <svg
              class="h-3 w-3 transition-transform duration-200 group-hover:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
          <dropdownSection />
        </div>

        <RouterLink
          to="/about"
          class="font-mono text-slate-400 transition-colors hover:text-white"
        >
          About
        </RouterLink>
      </nav>

      <button
        @click="toggleMenu"
        class="relative z-50 p-2 text-white focus:outline-none md:hidden"
      >
        <svg
          v-if="!isMobileMenuOpen"
          class="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
        <svg
          v-else
          class="h-8 w-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div
          v-if="isMobileMenuOpen"
          class="bg-lab-surface fixed inset-0 overflow-y-auto px-6 pt-24 md:hidden"
        >
          <nav class="flex flex-col space-y-6">
            <RouterLink
              to="/"
              class="block border-b border-slate-700/50 pb-2 font-mono text-2xl text-white"
              @click="closeMenu"
              >Home</RouterLink
            >

            <RouterLink
              to="/articles"
              class="block border-b border-slate-700/50 pb-2 font-mono text-2xl text-white"
              @click="closeMenu"
              >Articles</RouterLink
            >
            <div
              class="ml-2 flex flex-col space-y-3 border-l-2 border-slate-700 pl-6"
            >
              <span class="mb-1 font-mono tracking-widest uppercase"
                >Categories</span
              >
              <RouterLink
                to="/articles/linux"
                class="font-mono text-sm text-slate-400 hover:text-white"
                @click="closeMenu"
                >Linux</RouterLink
              >
              <RouterLink
                to="/articles/hardware"
                class="font-mono text-sm text-slate-400 hover:text-white"
                @click="closeMenu"
                >Hardware</RouterLink
              >
              <RouterLink
                to="/articles/network"
                class="font-mono text-sm text-slate-400 hover:text-white"
                @click="closeMenu"
                >Network</RouterLink
              >
              <RouterLink
                to="/articles/self-hosting"
                class="font-mono text-sm text-slate-400 hover:text-white"
                @click="closeMenu"
                >Self-Hosting</RouterLink
              >
              <RouterLink
                to="/study-cases"
                class="font-mono text-sm text-slate-400 hover:text-white"
                @click="closeMenu"
                >Study Cases</RouterLink
              >
            </div>

            <RouterLink
              to="/about"
              class="block border-b border-slate-700/50 pb-2 font-mono text-2xl text-white"
              @click="closeMenu"
              >About</RouterLink
            >
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>
