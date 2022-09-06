<template>
    <section class="py-[143px] text-center container mx-auto flex flex-col items-center">

      <div class="text-center">
        <h3 class="text-primary font-bold text-[24px]">LOREM IPSUM</h3>
        <h1 class="text-secondary mt-[15px] font-bold text-[50px]">DICONO DI NOI</h1>
        <h5 class="max-w-[800px] font-medium text-[18px] text-[#B4B4B4] mt-[33px] leading-[27px]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h5>
    
        <div class="mt-[55px]">
            <!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
    
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
        </div>
      </div>
    </section>
</template>


<script>
  
  const swiper = new Swiper('.swiper', {
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
</script>
<script>


 export default {
  head: {
    script: [
      {
        src: "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js",
      },
    ],
    link: [
        {
          rel: 'stylesheet', 
          href: 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css',
        },
    ],
  }
  // other config goes here
}
</script>