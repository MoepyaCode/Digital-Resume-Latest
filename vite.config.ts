import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'path'

const root = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Resume-Creator/',
  plugins: [react()],
  resolve: {
    alias: {
      '@templates': resolve(root, 'templates'),
      '@templates/*': resolve(root, 'templates/*'),
      '@pages': resolve(root, 'pages'),
      '@pages/*': resolve(root, 'pages/*'),
    }
  }
})
