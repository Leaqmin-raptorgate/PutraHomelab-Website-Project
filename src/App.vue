<script setup>
import theHeader from './components/layout/theHeader.vue';
import theFooter from './components/layout/theFooter.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  <theHeader />
    <RouterView />
  <theFooter />
</template>