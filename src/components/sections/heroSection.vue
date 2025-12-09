<template>
  <section class="lab-section">
    <div class="flex flex-col items-center gap-10 md:flex-row">
      <div class="order-last w-full space-y-6 md:order-first md:w-1/2">
        <h1 class="lab-h1">Simplifying Homelab Journey.</h1>

        <p
          class="max-w-md font-sans text-sm leading-relaxed text-slate-400 md:text-base"
        >
          Practical guides and case studies from my experiences on Docker, Networking, and Server Management. 
        </p>

        <button
          class="mt-4 cursor-pointer rounded border border-slate-600 px-8 
          py-3 font-mono text-sm text-slate-300 transition-all duration-300
        hover:border-white hover:bg-white hover:text-black hover:shadow-2xl bg-lab-surface
        "
        >
          Start Exploring!
        </button>
      </div>

      <div
        class="md:justify flex w-full justify-center md:w-1/2 md:justify-end"
      >
        <img
          src="/src/assets/pictures/elaina chill 1.png"
          alt="Elaina Chilling"
          class="h-auto w-full max-w-sm rounded-xl object-cover shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>
