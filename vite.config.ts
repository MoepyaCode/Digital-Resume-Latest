import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'path'

const root = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@digital-resume/templates': resolve(root, 'templates'),
      '@digital-resume/templates/*': resolve(root, 'templates/*'),
      '@digital-resume/pages': resolve(root, 'pages'),
      '@digital-resume/pages/*': resolve(root, 'pages/*'),
    }
  }
})
