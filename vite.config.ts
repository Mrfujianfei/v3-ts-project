import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // 设置 @ 指向 /src 目录
      // '@components':resolve(__dirname,'src/components'),
      // '@pages':resolve(__dirname,'src/pages')
    },
  },
});
