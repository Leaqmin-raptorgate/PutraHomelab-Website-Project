<script setup>
import NavBar from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#1e202e]"> 
    <NavBar />
    <main class="flex-grow">
      <RouterView />
    </main>

    <Footer />
    
  </div>
</template>