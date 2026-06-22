import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import vercel from "@astrojs/vercel"

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [react()],
	output: "server",
	adapter: vercel(),
	site: "https://santicm.dev",
})
