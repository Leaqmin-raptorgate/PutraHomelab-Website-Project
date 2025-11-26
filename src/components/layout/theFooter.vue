<template>
  <footer class="w-full bg-[#1e293b] text-slate-400 border-t border-slate-700/50 mt-auto">
    <div class="max-w-6xl mx-auto px-6 py-12 flex flex-col justify-between items-center gap-8
                md:flex-row md:gap-0">

      <div class="flex flex-col items-center text-center space-y-4 max-w-sm
                  md:text-left md:items-start">
        
        <div class="flex items-center gap-3">
          <img 
            class="w-70 h-20 object-cover md:-ml-11 md:w-80" 
            src="/src/assets/pictures/logo/logoWeb.png" 
            alt="WebLogo"
            href="/"
          />
        </div>

        <p class="text-xs font-mono leading-relaxed opacity-70">
          An Independent Education Website<br>
          made by someone in computer science degree<br>
          based in Indonesia.
        </p>
      </div>

      <div class="font-mono text-sm font-bold opacity-60 md:absolute 
                  md:left-1/2 md:-translate-x-1/2 ml-1">
        since 2025
      </div>

      <div class="flex items-center gap-4">
        
        <a href="https://www.youtube.com/@SafetyGMR" class="bg-white text-black p-1.5 rounded-sm hover:bg-slate-200 transition-colors">
          <img class="w-5 h-5"
          src="/src/assets/pictures/logo_social/youtube.svg" 
          alt="YouTube Icon" />
        </a>
        
        <a href="https://www.instagram.com/raptor.gate1/" class="bg-white text-black p-1.5 rounded-sm hover:bg-slate transition-colors">
          <img class="w-5 h-5"
          src="/src/assets/pictures/logo_social/instagram.svg" 
          alt="Instagram Icon" />
        </a>
        

        <a href="#" class="bg-white text-black p-1.5 rounded-sm hover:bg-slate-200 transition-colors">
          <img class="w-5 h-5"
          src="/src/assets/pictures/logo_social/linkedin.svg" 
          alt="LinkedIn Icon" />
        </a>  

      </div>

    </div>
  </footer>
</template>