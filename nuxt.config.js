import axios from 'axios'
require('dotenv').config()
const { API_URL, API_KEY } = process.env

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'komura-c.net',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/scss/styles.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/dotenv',
    '@nuxtjs/svg',
  ],

  // dotenv: {},

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  generate: {
    async routes() {
      const pages = await axios
        .get(`${API_URL}?limit=100`, {
          headers: { 'X-API-KEY': API_KEY },
        })
        .then((res) =>
          res.data.contents.map((content) => ({
            route: `/posts/${content.id}`,
            payload: content,
          }))
        )
      return pages
    },
  },

  privateRuntimeConfig: {
    apiURL: API_URL,
    apiKey: API_KEY,
  },
  publicRuntimeConfig: {
    apiURL: process.env.NODE_ENV !== 'production' ? API_URL : undefined,
    apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,
  },
}
