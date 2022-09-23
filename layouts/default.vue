<template>

  <div>
    <BaseHeader />
    <main class="min-h-screen">
      <Nuxt />
    </main>
    <BaseFooter />
  </div>

</template>



<script>
export default {

  head(){
    return{
        script: [
      {
        type: "application/javascript",
        src: "https://unpkg.com/flowbite@1.5.3/dist/datepicker.js",
      },
      {
        type: "application/javascript",
        src: "https://unpkg.com/flowbite@1.5.3/dist/flowbite.js",
      },
      {
        type: "application/javascript",
        src: "https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js",
      },
     
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css",
      }
      
    ]

  }

  },
  
 

}
</script>