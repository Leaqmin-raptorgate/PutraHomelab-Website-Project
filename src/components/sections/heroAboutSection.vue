<template>
  <div class="flex flex-col items-center gap-16 md:flex-row">
    <div class="w-full space-y-6 md:w-1/2">
      <span class="lab-badge text-blue-400"> The Project </span>

      <h1 class="lab-h1">Digital Garden & Documentation.</h1>

      <p class="font-sans text-lg leading-relaxed text-slate-400">
        PutraHomelab is an open documentation project. It serves as a living
        record of my experiments with
        <span class="font-bold text-white">Self-Hosting</span>,
        <span class="font-bold text-white">Linux Administration</span>, and
        <span class="font-bold text-white">Network Security</span>.
      </p>

      <p class="font-sans text-lg leading-relaxed text-slate-400">
        The goal is simple: To document complex systems in a way that is easy to
        understand, reproduce, and improve upon.
      </p>

      <div class="grid grid-cols-2 gap-4 pt-4">
        <div class="lab-card p-4 text-center">
          <div class="font-mono text-2xl font-bold text-white">Debian</div>
          <div class="text-xs tracking-widest text-slate-500 uppercase">
            Core OS
          </div>
        </div>
        <div class="lab-card p-4 text-center">
          <div class="font-mono text-2xl font-bold text-white">Vue 3</div>
          <div class="text-xs tracking-widest text-slate-500 uppercase">
            Frontend
          </div>
        </div>
      </div>
    </div>

    <div
      class="order-first flex w-full justify-center md:order-last md:w-1/2 md:justify-end"
    >
      <div
        class="lab-card w-full max-w-md rotate-2 bg-[#0f172a] p-6 font-mono text-xs text-slate-300 shadow-2xl transition-transform duration-500 hover:rotate-0 md:text-sm"
      >
        <div class="mb-4 flex gap-2 border-b border-slate-700 pb-4">
          <div class="h-3 w-3 rounded-full bg-red-500"></div>
          <div class="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div class="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <p class="mb-2">
          <span class="text-green-400">putra@server:~$</span> neofetch
        </p>
        <p>------------------</p>
        <p>
          <span class="text-blue-400">OS</span>: Debian GNU/Linux 12 (bookworm)
        </p>
        <p><span class="text-blue-400">Host</span>: Lenovo M720T</p>
        <p><span class="text-blue-400">Kernel</span>: 6.1.0-18-amd64</p>
        <p>
          <span class="text-blue-400">Uptime</span>: 42 days, 3 hours, 12 mins
        </p>
        <p><span class="text-blue-400">Memory</span>: 1420MiB / 16384MiB</p>
        <p class="mt-2 animate-pulse">
          <span class="text-green-400">putra@server:~$</span> _
        </p>
      </div>
    </div>
  </div>
</template>
