<script setup>
// Define what data this card needs to receive from the parent
defineProps({
  category: String,
  title: String,
  date: String,
  image: String,
  iconName: String 
})

import linuxIcon from '/src/assets/pictures/logo_social/linux-brands.svg';
import hardwareIcon from '/src/assets/pictures/logo_social/computer.svg';
import selfhostIcon from '/src/assets/pictures/logo_social/server.svg';
import networkIcon from '/src/assets/pictures/logo_social/network.svg';

const iconMap = {
    'linux': linuxIcon,
    'hardware': hardwareIcon,
    'self-hosting': selfhostIcon,
    'network': networkIcon
};
</script>

<template>
    <div class="lab-card 
                group flex flex-col h-full 
                p-6">
    
    <div class="flex items-center gap-3 mb-4">
        <div class="lab-icon-circle 
                    bg-blue-600 shadow-blue-900/20">

            <img 
              v-if="iconMap[iconName]" 
              :src="iconMap[iconName]" 
              alt="" 
              class="w-auto h-5" 
            />
            <span v-else class="text-[10px]">{{ category ? category.charAt(0) : '' }}</span>
        </div>
      
        <span class="lab-badge text-blue-400">
            {{ category }}
        </span>
    </div>

    <h3 class="text-xl font-bold font-mono italic text-white mb-2 leading-tight
             group-hover:text-blue-300 transition-colors">
        {{ title }}
    </h3>

    <div class="mt-auto pt-6 border-t border-slate-700/50">
        <span class="text-xs font-mono text-slate-500">
            Posted: {{ date }}
        </span>
    </div>

  </div>
</template>