import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
    GIT_BRANCH: JSON.stringify(execSync('git rev-parse --abbrev-ref HEAD').toString().trimEnd())
  },
  server: {
    port: 8008
  }
})
