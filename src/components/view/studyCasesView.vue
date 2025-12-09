<script setup>
import FeatureSection from '@/components/sections/featureSection.vue'

// Manual Data for Case Studies (Or import from a separate file)
const cases = [
  {
    id: 1,
    title: 'Network Optimization Kemala Beach Resort',
    subtitle: 'NETWORKING',
    desc: 'This is about how i optimized the network infrastructure at Kemala Beach Resort to improve connectivity and performance for guests and staff. Implemented VLANs, Upgraded Hardware, Clear Network Policies and design with a massive improvement in network speed and reliability.',
    image: '/src/assets/pictures/elaina chill 1.png' // Use your real images
  },
  {
    id: 2,
    title: '',
    subtitle: 'SECURITY',
    desc: 'Isolating IoT devices from the main network using VLANs on a Mikrotik router to prevent smart bulbs from sniffing packet traffic.',
    image: '/src/assets/pictures/elaina chill 1.png'
  },
  {
    id: 3,
    title: 'Automated Media Server',
    subtitle: 'AUTOMATION',
    desc: 'Setting up the *Arr stack (Sonarr, Radarr) with Jellyfin for a completely automated home theater experience managed by Docker Compose.',
    image: '/src/assets/pictures/elaina chill 1.png'
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
