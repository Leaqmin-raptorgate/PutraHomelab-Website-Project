<script>
    import cardSkill from '../cards/cardskill.vue';
    import { kartuaja } from '@/assets/data/kartu';
</script>
<template>
    <div
      class="scrollbar-hide -mx-6 flex gap-6 overflow-x-auto px-6 pb-8 md:mx-0 md:px-0"
    >
      <div
        v-for="item in kartuaja"
        :key="item.id"
        class="w-[85vw] flex-none sm:w-80 md:w-96"
      >
        <articleCard
          :image="item.image || ''"
        />
      </div>
    </div>
</template>