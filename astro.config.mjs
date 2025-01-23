import react from "@astrojs/react"
import { defineConfig } from "astro/config"
import tailwindcss from "@tailwindcss/vite"
import vercel from "@astrojs/vercel"

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	output: "server",
	adapter: vercel(),
	// site: "https://santicm.com",
	vite: {
		plugins: [tailwindcss()],
	},
})
