export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'yong\'s tool',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: '유용한 계산 도구 사이트' 
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'google-site-verification', content:'2o4RihSKML28YS6_J93GbP4zyafHW1Z7JQKMYSEd1H0' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'canonical', href: 'https://yongstool.com' }
    ],
  },
  router: {
    extendRoutes(routes, resolve){
      routes.length = 0;
      routes.push({
        name: 'Tools',
        path: '/',
        component: resolve(__dirname, 'pages/index.vue'),
        url: "/",
      }),
      routes.push({
        name: '2022년 연봉 실수령액 표',
        path: '/RealIncome',
        component: resolve(__dirname, 'pages/RealIncome.vue'),
        url: "/realincome",
      }),
      routes.push({
        name: '물타기 계산기',
        path: '/CalcWater',
        component: resolve(__dirname, 'pages/CalcWater.vue'),
        url: "/CalcWater",
      })
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  robots: {
    UserAgent: "*",
    Allow: "/",
    Sitemap: "https://www.yongstool.com/sitemap.xml",
  },

  sitemap: {
    hostname: "https://www.yongstool.com/",
    defaults: {
      changefreq: "daily",
      priority: 1,
      lastmod: new Date(),
    },
  },

  generate: {
    routes: [
      '/RealIncome',
      '/WaterRide',
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
