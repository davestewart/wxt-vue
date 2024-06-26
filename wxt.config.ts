import { defineConfig } from 'wxt'
import vue from '@vitejs/plugin-vue'

// See https://wxt.dev/api/config.html
export default defineConfig({
  // folders
  outDir: 'dist',
  srcDir: 'src',
  entrypointsDir: 'pages',

  // build
  runner: {
    disabled: true,
    binaries: {
      chrome: '/Applications/Google Chrome.app'
    },
  },
  imports: {
    addons: {
      vueTemplate: true,
    },
  },
  vite: () => ({
    plugins: [vue()],
  }),
})
