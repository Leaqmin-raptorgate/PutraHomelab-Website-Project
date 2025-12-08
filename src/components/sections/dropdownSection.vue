<template>
  <div
    class="bg-lab-surface invisible absolute top-full left-0 w-48 translate-y-2 rounded-b-md border border-slate-700 opacity-0 shadow-xl transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
  >
    <div class="flex flex-col py-2">
      <RouterLink
        to="/articles/linux"
        class="border-l-2 border-transparent px-4 py-3 font-mono text-xs text-slate-400 transition-colors hover:border-blue-400 hover:bg-slate-800 hover:text-white"
        >Linux
      </RouterLink>
      <RouterLink
        to="/articles/hardware"
        class="border-l-2 border-transparent px-4 py-3 font-mono text-xs text-slate-400 transition-colors hover:border-blue-400 hover:bg-slate-800 hover:text-white"
        >Hardware</RouterLink
      >
      <RouterLink
        to="/articles/network"
        class="border-l-2 border-transparent px-4 py-3 font-mono text-xs text-slate-400 transition-colors hover:border-blue-400 hover:bg-slate-800 hover:text-white"
        >Network</RouterLink
      >
      <RouterLink
        to="/articles/self-hosting"
        class="border-l-2 border-transparent px-4 py-3 font-mono text-xs text-slate-400 transition-colors hover:border-blue-400 hover:bg-slate-800 hover:text-white"
        >Self-Hosting</RouterLink
      >
      <RouterLink
        to="/study-cases"
        class="border-l-2 border-transparent px-4 py-3 font-mono text-xs text-slate-400 transition-colors hover:border-blue-400 hover:bg-slate-800 hover:text-white"
        >Study Cases</RouterLink
      >
    </div>
  </div>
</template>
