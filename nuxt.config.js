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
    routes: [
      '/news/info',
      '/news/event',
      '/news/esport',
      '/news/system',
      '/news/videos',
      '/news/tft-infoAA',
      '/news/tft-infoBB',
      '/news/articles/123',
      '/news/articles/1234',
      '/news/articles/12345',
      '/news/articles/123456',
      '/news/articles/1234567',
      '/news/articles/12345678',
      '/champions/Aatrox',
      '/champions/Ahri',
      '/champions/Akali',
      '/champions/Akshan',
      '/champions/Alistar',
      '/champions/Amumu',
      '/champions/Anivia',
      '/champions/Annie',
      '/champions/Aphelios',
      '/champions/Ashe',
      '/champions/AurelionSol',
      '/champions/Azir',
      '/champions/Bard',
      '/champions/Belveth',
      '/champions/Blitzcrank',
      '/champions/Brand',
      '/champions/Braum',
      '/champions/Caitlyn',
      '/champions/Camille',
      '/champions/Cassiopeia',
      '/champions/Chogath',
      '/champions/Corki',
      '/champions/Darius',
      '/champions/Diana',
      '/champions/DrMundo',
      '/champions/Draven',
      '/champions/Ekko',
      '/champions/Elise',
      '/champions/Evelynn',
      '/champions/Ezreal',
      '/champions/Fiddlesticks',
      '/champions/Fiora',
      '/champions/Fizz',
      '/champions/Galio',
      '/champions/Gangplank',
      '/champions/Garen',
      '/champions/Gnar',
      '/champions/Gragas',
      '/champions/Graves',
      '/champions/Gwen',
      '/champions/Hecarim',
      '/champions/Heimerdinger',
      '/champions/Illaoi',
      '/champions/Irelia',
      '/champions/Ivern',
      '/champions/Janna',
      '/champions/JarvanIV',
      '/champions/Jax',
      '/champions/Jayce',
      '/champions/Jhin',
      '/champions/Jinx',
      '/champions/KSante',
      '/champions/Kaisa',
      '/champions/Kalista',
      '/champions/Karma',
      '/champions/Karthus',
      '/champions/Kassadin',
      '/champions/Katarina',
      '/champions/Kayle',
      '/champions/Kayn',
      '/champions/Kennen',
      '/champions/Khazix',
      '/champions/Kindred',
      '/champions/Kled',
      '/champions/KogMaw',
      '/champions/Leblanc',
      '/champions/LeeSin',
      '/champions/Leona',
      '/champions/Lillia',
      '/champions/Lissandra',
      '/champions/Lucian',
      '/champions/Lulu',
      '/champions/Lux',
      '/champions/Malphite',
      '/champions/Malzahar',
      '/champions/Maokai',
      '/champions/MasterYi',
      '/champions/Milio',
      '/champions/MissFortune',
      '/champions/MonkeyKing',
      '/champions/Mordekaiser',
      '/champions/Morgana',
      '/champions/Nami',
      '/champions/Nasus',
      '/champions/Nautilus',
      '/champions/Neeko',
      '/champions/Nidalee',
      '/champions/Nilah',
      '/champions/Nocturne',
      '/champions/Nunu',
      '/champions/Olaf',
      '/champions/Orianna',
      '/champions/Ornn',
      '/champions/Pantheon',
      '/champions/Poppy',
      '/champions/Pyke',
      '/champions/Qiyana',
      '/champions/Quinn',
      '/champions/Rakan',
      '/champions/Rammus',
      '/champions/RekSai',
      '/champions/Rell',
      '/champions/Renata',
      '/champions/Renekton',
      '/champions/Rengar',
      '/champions/Riven',
      '/champions/Rumble',
      '/champions/Ryze',
      '/champions/Samira',
      '/champions/Sejuani',
      '/champions/Senna',
      '/champions/Seraphine',
      '/champions/Sett',
      '/champions/Shaco',
      '/champions/Shen',
      '/champions/Shyvana',
      '/champions/Singed',
      '/champions/Sion',
      '/champions/Sivir',
      '/champions/Skarner',
      '/champions/Sona',
      '/champions/Soraka',
      '/champions/Swain',
      '/champions/Sylas',
      '/champions/Syndra',
      '/champions/TahmKench',
      '/champions/Taliyah',
      '/champions/Talon',
      '/champions/Taric',
      '/champions/Teemo',
      '/champions/Thresh',
      '/champions/Tristana',
      '/champions/Trundle',
      '/champions/Tryndamere',
      '/champions/TwistedFate',
      '/champions/Twitch',
      '/champions/Udyr',
      '/champions/Urgot',
      '/champions/Varus',
      '/champions/Vayne',
      '/champions/Veigar',
      '/champions/Velkoz',
      '/champions/Vex',
      '/champions/Vi',
      '/champions/Viego',
      '/champions/Viktor',
      '/champions/Vladimir',
      '/champions/Volibear',
      '/champions/Warwick',
      '/champions/Xayah',
      '/champions/Xerath',
      '/champions/XinZhao',
      '/champions/Yasuo',
      '/champions/Yone',
      '/champions/Yorick',
      '/champions/Yuumi',
      '/champions/Zac',
      '/champions/Zed',
      '/champions/Zeri',
      '/champions/Ziggs',
      '/champions/Zilean',
      '/champions/Zoe',
      '/champions/Zyra',
    ]
  }
}
