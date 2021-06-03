import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy';
import Markdown from 'vite-plugin-md';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, './src') }]
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Markdown(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "@/styles/variables.scss";@import "@/sites/assets/styles/variables.scss";`
      }
    }
  },
  build: {
    target: 'es2015',
    // outDir: './dist/3x/',
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        doc: resolve(__dirname, 'index.html'),
        // mobile: resolve(__dirname, 'demo.html')
      }
    }
  }
})
