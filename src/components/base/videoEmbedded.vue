<script setup>
defineProps({
  url: String // standard Youtube URL
})

// Helper to extract ID from URL (Simple version)
const getEmbedUrl = (url) => {
  const videoId = url.split('v=')[1] || url.split('/').pop()
  return `https://www.youtube.com/embed/${videoId}`
}
</script>

<template>
  <div class="w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-700/50 my-8">
    <iframe 
      :src="getEmbedUrl(url)" 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      class="w-full h-full"
    ></iframe>
  </div>
</template>