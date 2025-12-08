<template>
  <div
    class="bg-lab-surface invisible absolute top-full left-0 w-48 -translate-x-5 translate-y-2 rounded-b-md border border-slate-700 opacity-0 shadow-xl transition-all duration-200 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
  >
    <div class="flex flex-col py-2">
      <RouterLink to="/articles/linux" class="lab-header-dropdown-selection-btn"
        >Linux
      </RouterLink>
      <RouterLink
        to="/articles/hardware"
        class="lab-header-dropdown-selection-btn"
        >Hardware</RouterLink
      >
      <RouterLink
        to="/articles/network"
        class="lab-header-dropdown-selection-btn"
        >Network</RouterLink
      >
      <RouterLink
        to="/articles/self-hosting"
        class="lab-header-dropdown-selection-btn"
        >Self-Hosting</RouterLink
      >
      <RouterLink to="/study-cases" class="lab-header-dropdown-selection-btn"
        >Study Cases</RouterLink
      >
    </div>
  </div>
</template>
