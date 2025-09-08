import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configure base path for GitHub Pages automatically when building in Actions.
// Locally (dev/preview) it stays at '/'.
const repoName = process.env.GITHUB_REPOSITORY
  ? process.env.GITHUB_REPOSITORY.split('/')[1]
  : ''

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? `/${repoName}/` : '/',
})
