import colors from 'vuetify/es5/util/colors'
import { Auth } from 'nuxtjs__auth'
export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s',
    title: 'JB-Links',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap', rel: 'stylesheet' }, 
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vuex'},
    { src: '~plugins/quill.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/auth',
  ],
  styleResources: {
    sass: ['~/assets/sass/base.sass']
  },
  auth: {
    fetchUserOnLogin: false,
    redirect: {
      // 未ログイン時に認証ルートにアクセスした際のリダイレクト先
      login: '/login',
      // ログアウト時のリダイレクト先
      logout: '/',
      // ログイン後のリダイレクト先
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          login: { url : '/api/login', method: 'post', propertyName: 'token' },
          logout: { url : '/api/logout', method: 'post' },
          user: { url: '/api/auth/user', method: 'get', propertyName: 'user' }
        }
      }
    }
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true,
    baseURL: 'http://localhost:8080/',
  },

  // CORS回避の設定
  proxy: {
    '/api/': {
      target: 'http://localhost:8080/',
      pathRewrite: {'^/api/': ''},
    }
  },

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  typescript: {
    typeCheck: true,
    ignoreNotFoundWarnings: true
  },
}
