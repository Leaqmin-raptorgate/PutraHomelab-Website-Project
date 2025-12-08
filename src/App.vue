<script setup>
import theHeader from './components/layout/footerAndHeader/theHeader.vue'
import theFooter from './components/layout/footerAndHeader/theFooter.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <theHeader />
  <RouterView />
  <theFooter />
</template>
