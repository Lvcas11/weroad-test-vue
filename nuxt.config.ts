import type { NuxtConfig } from '@nuxt/types'

// @ts-ignore
export default defineNuxtConfig({
  buildModules: ['@nuxt/typescript-build'],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
