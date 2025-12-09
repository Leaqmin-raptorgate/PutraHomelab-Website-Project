<script setup>
import FeatureSection from '@/components/sections/featureSection.vue'

// Manual Data for Case Studies (Or import from a separate file)
const cases = [
  {
    id: 1,
    title: 'Network Optimization Kemala Beach Resort',
    subtitle: 'NETWORKING',
    desc: 'This is about how i optimized the network infrastructure at Kemala Beach Resort to improve connectivity and performance for guests and staff. Implemented VLANs, Upgraded Hardware, Clear Network Policies and design with a massive improvement in network speed and reliability.',
    image: '/src/assets/data/study-case/pictures/kemalabeach.png' // Use your real images
  },
  {
    id: 2,
    title: 'Securely host a minecraft server with a "proxy server"',
    subtitle: 'Networking and Self-Hosting',
    desc: 'My so called "complicated" way how to securely host a minecraft server using a proxy server to mask real ip address to protect the main server from direct exposure to the internet.',
    image: '/src/assets/pictures/minecraft.jpg'
  }
]
</script>

<template>
  <div class="lab-section">
    <div class="mb-20 space-y-4 text-center">
      <h1 class="lab-h1">Case Studies</h1>
      <p class="mx-auto max-w-2xl font-sans text-slate-400">
        Deep dives into the specific problems I've solved in my homelab journey.
      </p>
    </div>

    <div v-for="(item, index) in cases" :key="item.id">
      <FeatureSection
        :title="item.title"
        :subtitle="item.subtitle"
        :image="item.image"
        :is-flipped="index % 2 !== 0"
      >
        {{ item.desc }}
      </FeatureSection>
    </div>
  </div>
</template>
