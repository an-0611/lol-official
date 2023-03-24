// import messages from './i18n/message';
import services from './services';
import envConfig from './webpack.env';

const { env, sassEnv } = envConfig;

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    port: 3101,
    host: '0.0.0.0',
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lol-demo',
    htmlAttrs: {
      lang: 'tw', // env.REGION
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  // css: ['@/assets/variable.scss', '@/assets/mixin.scss', '@/assets/global.scss'],
  // css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  env,
  plugins: [
    '~/plugins/axios',
    '~/plugins/i18n',
    // { src: '~/plugins/i18n', mode: 'client' },
    '~/plugins/swiper',
    // { src: '~/plugins/polyfills', mode: 'client' },
    { src: '~/plugins/particles', mode: 'client' },
    { src: '~/plugins/layout', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: [
      '@/assets/variable.scss',
      '@/assets/mixin.scss',
      '@/assets/global.scss'
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', 'nuxt-i18n'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // loaders: {
    //   scss: {
    //     additionalData: sassEnv,
    //     sourceMap: false,
    //   },
    // },
  },

  // axios: {
  //   proxy: true,
  //   credentials: false,
  // },

  serverMiddleware: [
    // '~/server-middleware/checkRoute',
    ...(true
      ? [
          {
            path: '/api/navigation-menu',
            handler: services.getNav,
          },
          {
            path: '/api/index',
            handler: services.getMain,
          },
          {
            path: '/api/news/topic',
            handler: services.getTopicNews,
          },
          {
            path: '/api/news/search',
            handler: services.getNews,
          },
          {
            path: '/api/news/categories',
            handler: services.getNewsCategories,
          },
          {
            path: '/api/news/detail',
            handler: services.getNewContent,
          },
          {
            path: '/api/ban/month',
            handler: services.getBanList,
          },
          {
            path: '/api/ban/search',
            handler: services.getBanSummoner,
          },
          {
            path: '/api/download/info',
            handler: services.getDownloadInfo,
          },
        ]
      : []),
  ],

  router: {
    base: '/lol-official/'
  },
  publicPath: '/lol-official/',
  generate: {
    dir: 'dist',
    routes: ['/news/articles/123']
  }
}
