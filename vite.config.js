import { defineConfig } from 'vite'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  server: {
    port: 3000
  },
  preview: {
    port: 3001
  },
  base: 'Canvas_Castle'
})