export default {
  server: {
    //host: '192.168.1.2',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MyParking',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
     
        {
          rel: 'icon', type: 'image/x-icon', href: '/favicon.ico',
        },
        {
          rel: 'stylesheet', href: 'https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css',
        },
        {
          rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css',
        },
      
    ],
    script: [
      {
        hid: 'flowbite',
        type: 'text/javascript',
        src: 'https://unpkg.com/flowbite@1.5.3/dist/flowbite.js',
        defer: true,
      },
      {
        hid: 'datepicker',
        type: 'text/javascript',
        src: 'https://unpkg.com/flowbite@1.5.3/dist/datepicker.js',
        defer: true,
      },
      {
        hid:'swipr',
        type: 'text/javascript',
        src: 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js',
      },
      
    ],
 
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [  
    { src: '~/plugins/vue-datepicker', ssr: false }, // Datepicker plugin here 
    { src: '~/plugins/paypal.client'}, // Paypal Plugin Here
   
],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    
    
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['vue-paypal-checkout'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  
}
