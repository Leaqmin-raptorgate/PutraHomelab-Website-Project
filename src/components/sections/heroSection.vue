<template>
  <section class="lab-section">
    
    <div class= "flex flex-col 
                 items-center gap-10 
                 md:flex-row">
      
      <div class= "w-full space-y-6 order-last 
                   md:w-1/2 md:order-first">
        <h1 class= "lab-h1">
          Hero Section Placeholder
        </h1>

        <p class=  "font-sans leading-relaxed text-sm 
                  text-slate-400 max-w-md
                    md:text-base">
          This is a placeholder for the hero section content. You can add your introduction, tagline, or any other relevant information here to engage your visitors.
        </p>

        <button class= "mt-4 px-8 py-3 border 
                        font-mono text-sm
                      border-slate-600 text-slate-300 rounded 
                      hover:bg-white hover:text-black hover:border-white hover:shadow-2xl 
                        transition-all duration-300 cursor-pointer">
          Get Started
        </button>
      </div>

      <div class= "w-full flex justify-center 
                   md:justify-end md:w-1/2 ">
        <img 
          src="/src/assets/pictures/elaina chill 1.png" 
          alt="Elaina Chilling" 
          class= "w-full max-w-sm h-auto object-cover
                  rounded-xl shadow-2xl"
        />
      </div>

    </div>
  </section>
</template>