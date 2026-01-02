import { defineConfig } from 'vite'

export default defineConfig({
  // Ez biztosítja, hogy a GitHub Pages almappájában (/Orsi-weboldal/) is jók legyenek az útvonalak
  base: '/Orsi-weboldal/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})