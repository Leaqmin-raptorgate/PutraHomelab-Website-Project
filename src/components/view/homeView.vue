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
      title="Feature Section Placeholder"
      subtitle="FEATURED"
      :isFlipped="false"
    >
      This is a placeholder for the feature section content. You can describe a
      specific feature, service, or case study here to highlight its importance
      and engage your audience.
    </featureSection>
  </body>
</template>
