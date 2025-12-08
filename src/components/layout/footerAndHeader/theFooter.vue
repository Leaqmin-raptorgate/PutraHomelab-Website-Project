<template>
  <footer
    class="mt-auto w-full border-t border-slate-700/50 bg-lab-surface text-slate-400"
  >
    <div
      class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row md:gap-0"
    >
      <div
        class="flex max-w-sm flex-col items-center space-y-4 text-center md:items-start md:text-left"
      >
        <div class="flex items-center gap-3">
          <img
            class="h-20 w-70 object-cover md:-ml-11 md:w-80"
            src="/src/assets/pictures/logo/logoWeb.png"
            alt="WebLogo"
            href="/"
          />
        </div>

        <p class="font-mono text-xs leading-relaxed opacity-70">
          An Independent Education Website<br />
          made by someone in computer science degree<br />
          based in Indonesia.
        </p>
      </div>

      <div
        class="ml-1 font-mono text-sm font-bold opacity-60 md:absolute md:left-1/2 md:-translate-x-1/2"
      >
        since 2025
      </div>

      <div class="flex items-center gap-4">
        <a
          href="https://www.youtube.com/@SafetyGMR"
          class="rounded-sm bg-white p-1.5 text-black transition-colors hover:bg-slate-200"
        >
          <img
            class="h-5 w-5"
            src="/src/assets/pictures/logo_social/youtube.svg"
            alt="YouTube Icon"
          />
        </a>

        <a
          href="https://www.instagram.com/raptor.gate1/"
          class="hover:bg-slate rounded-sm bg-white p-1.5 text-black transition-colors"
        >
          <img
            class="h-5 w-5"
            src="/src/assets/pictures/logo_social/instagram.svg"
            alt="Instagram Icon"
          />
        </a>

        <a
          href="#"
          class="rounded-sm bg-white p-1.5 text-black transition-colors hover:bg-slate-200"
        >
          <img
            class="h-5 w-5"
            src="/src/assets/pictures/logo_social/linkedin.svg"
            alt="LinkedIn Icon"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
