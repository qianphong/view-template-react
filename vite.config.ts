import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
    }),
  ],
  resolve: {
    alias: {
      '@': `${resolve(__dirname, './src')}`,
      '#': `${resolve(__dirname, './types')}`,
    },
  },
})
