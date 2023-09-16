import { useAuthStore } from './stores/auth'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'JWT Auth System'
    }
  },
  css: [
    '~/assets/scss/main.scss',
  ],
  modules: [
    '@pinia/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      BASE_URL: 'http://127.0.0.1:8000',
    }
  },
})
