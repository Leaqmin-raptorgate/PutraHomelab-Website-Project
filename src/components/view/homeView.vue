<script setup>
import heroSection from '@/components/sections/heroSection.vue'
import featureSection from '@/components/sections/featureSection.vue'
import latestArticle from '@/components/sections/latestArticle.vue'
</script>

<template>
  <main class="flex text-white">
    <heroSection />
  </main>
  <body>
    <latestArticle />

    <featureSection
      title="Network Optimization Kemala Beach Resort"
      subtitle="FEATURED"
      image="/src/assets/data/study-case/pictures/kemalabeach.png"
      :isFlipped="false"
    >
      This is about how i optimized the network infrastructure at Kemala Beach
      Resort to improve connectivity and performance for guests and staff.
      Implemented VLANs, Upgraded Hardware, Clear Network Policies and design
      with a massive improvement in network speed and reliability.
    </featureSection>
  </body>
</template>
