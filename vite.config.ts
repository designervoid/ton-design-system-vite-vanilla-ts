import { defineConfig } from 'vite'

export default defineConfig({
  define: {
    // https://github.com/vuejs/vue-next/blob/master/packages/vue/README.md#bundler-build-feature-flags
    '__VUE_OPTIONS_API__': true,
    '__VUE_PROD_DEVTOOLS__': false,
  }
})