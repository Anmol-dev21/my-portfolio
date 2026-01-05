import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages under a repo subpath, set base to '/<repo-name>/'
  // base: '/your-repo-name/'
})
