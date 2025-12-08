<template>
  <div
    class="panel invisible absolute top-full left-0 w-48 translate-y-2 rounded-b-lg opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
  >
    <div class="flex flex-col py-2">
      <RouterLink
        to="/articles/linux"
        class="hover:text-primary block px-4 py-2 text-gray-400 hover:bg-white/5"
        >Linux</RouterLink
      >
      <RouterLink
        to="/articles/hardware"
        class="hover:text-primary block px-4 py-2 text-gray-400 hover:bg-white/5"
        >Hardware</RouterLink
      >
      <RouterLink
        to="/articles/network"
        class="hover:text-primary block px-4 py-2 text-gray-400 hover:bg-white/5"
        >Network</RouterLink
      >
      <RouterLink
        to="/articles/self-hosting"
        class="hover:text-primary block px-4 py-2 text-gray-400 hover:bg-white/5"
        >Self-Hosting</RouterLink
      >
    </div>
  </div>
</template>
