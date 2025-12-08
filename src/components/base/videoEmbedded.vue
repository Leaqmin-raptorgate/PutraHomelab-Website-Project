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
  <div
    class="my-8 aspect-video w-full overflow-hidden rounded-xl border border-slate-700/50 shadow-lg"
  >
    <iframe
      :src="getEmbedUrl(url)"
      title="YouTube video player"
      frameborder="0"
      allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
      "
      allowfullscreen
      class="h-full w-full"
    ></iframe>
  </div>
</template>
