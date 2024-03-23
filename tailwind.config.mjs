/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: "class",
	theme: {
		extend: {
			keyframes: {
				"tracking-in-expand": {
					"0%": {
						"letter-spacing": "-0.5em",
						"opacity": "0",
					},
					"40%": {
						opacity: "0.6",
					},
					"100%": {
						opacity: "1",
					},
				},
				"slide-in-top": {
					"0%, 50%": {
						transform: "translateY(-100%)",
					},
					"100%": {
						transform: "none",
					},
				},
				"fade-in": {
					"0%, 25%": {
						opacity: "0",
						transform: "translateY(4rem)",
					},
					"100%": {
						opacity: "1",
						transform: "none",
					},
				},
			},
			animation: {
				"tracking-in-expand": "tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both",
				"slide-in-top": "slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
				"fade-in": "fade-in 1s ease-out forwards",
			},
		},
	},
	plugins: [],
}
