import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
// import Fonts from "unplugin-fonts/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Fonts({
    //   custom: {
    //     families: [
    //       {
    //         name: "Syne",
    //         src: "public/fonts/syne.woff2"
    //       },
    //       {
    //         name: "Poppins",
    //         src: "public/fonts/poppins.woff2"
    //       }
    //     ],
    //     preload: true,
    //     injectTo: "head-prepend",
    //     display: "swap",
    //   }
    // })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
