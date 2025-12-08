<script setup>
// Define what data this card needs to receive from the parent
defineProps({
  category: String,
  title: String,
  date: String,
  image: String,
  iconName: String
})

import linuxIcon from '/src/assets/pictures/logo_social/linux-brands.svg'
import hardwareIcon from '/src/assets/pictures/logo_social/computer.svg'
import selfhostIcon from '/src/assets/pictures/logo_social/server.svg'
import networkIcon from '/src/assets/pictures/logo_social/network.svg'

const iconMap = {
  linux: linuxIcon,
  hardware: hardwareIcon,
  'self-hosting': selfhostIcon,
  network: networkIcon
}
</script>

<template>
  <div class="lab-card group flex h-full flex-col p-6">
    <div class="mb-4 flex items-center gap-3">
      <div class="lab-icon-circle bg-blue-600 shadow-blue-900/20">
        <img
          v-if="iconMap[iconName]"
          :src="iconMap[iconName]"
          alt=""
          class="h-5 w-auto"
        />
        <span v-else class="text-[10px]">{{
          category ? category.charAt(0) : ''
        }}</span>
      </div>

      <span class="lab-badge text-blue-400">
        {{ category }}
      </span>
    </div>

    <h3
      class="mb-2 font-mono text-xl leading-tight font-bold text-white italic transition-colors group-hover:text-blue-300"
    >
      {{ title }}
    </h3>

    <div class="mt-auto border-t border-slate-700/50 pt-6">
      <span class="font-mono text-xs text-slate-500"> Posted: {{ date }} </span>
    </div>
  </div>
</template>
