<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
// Ensure this path matches where you kept your data
import { navItems } from '@/assets/data/dropdownData.js' 
import NavBarItem from '@/components/layout/dropdown.vue'

const isMobileMenuOpen = ref(false)

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  document.body.style.overflow = isMobileMenuOpen.value ? 'hidden' : 'auto'
}

const closeMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = 'auto'
}
</script>

<template>
  <header class="w-full bg-[#1e293b] border-b border-slate-700/50 sticky top-0 z-50 shadow-xl shadow-black/40">
    <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
      
      <div class="flex items-center gap-3 relative z-50">
        <RouterLink to="/" @click="closeMenu">
          <img 
            class="w-32 md:w-48 h-auto object-contain -ml-2" 
            src="/src/assets/pictures/logo/logoWeb.png" 
            alt="PUTRA Logo" 
          />
        </RouterLink>
      </div>

      <nav class="hidden md:flex items-center gap-8 h-full">
        <NavBarItem 
          v-for="nav in navItems" 
          :key="nav.name" 
          :item="nav" 
        />
      </nav>

      <button 
        @click="toggleMenu"
        class="text-white md:hidden relative z-50 p-2 focus:outline-none"
      >
        <svg v-if="!isMobileMenuOpen" class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>

        <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
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
          class="fixed inset-0 bg-[#1e293b] pt-24 px-6 md:hidden overflow-y-auto"
        >
          <nav class="flex flex-col space-y-6">
            
            <div v-for="item in navItems" :key="item.name" class="space-y-3">
              
              <RouterLink 
                :to="item.path" 
                class="text-2xl font-bold font-mono text-white block border-b border-slate-700/50 pb-2"
                @click="closeMenu"
                active-class="text-white"
              >
                {{ item.name }}
              </RouterLink>

              <div v-if="item.children" class="flex flex-col space-y-3 pl-6 border-l-2 border-slate-700 ml-2">
                <RouterLink 
                  v-for="child in item.children" 
                  :key="child.name"
                  :to="child.path"
                  class="text-slate-400 font-mono text-sm hover:text-blue-400 transition-colors"
                  active-class="text-white"
                  @click="closeMenu"
                >
                  {{ child.name }}
                </RouterLink>
              </div>

            </div>

          </nav>
        </div>
      </Transition>

    </div>
  </header>
</template>