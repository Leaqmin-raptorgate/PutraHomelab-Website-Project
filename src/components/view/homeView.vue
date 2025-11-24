<script setup>
import heroSection from '@/components/sections/heroSection.vue';
import featureSection from '@/components/sections/featureSection.vue';
import latestArticle from '@/components/sections/latestArticle.vue';
</script>

<template>
    <main class="min-h-screen bg-[#1e202e] text-white space-y-12 pb-20 flex">
      <heroSection />
    </main>
    <main> 

      <latestArticle />

      <featureSection  
        title="Feature Section Placeholder" 
        subtitle="FEATURED"
        :isFlipped="false"
      >
        This is a placeholder for the feature section content. You can describe a specific feature, service, or case study here to highlight its importance and engage your audience.
      </featureSection>

    </main>

</template>