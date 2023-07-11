/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'teal-blue': {  DEFAULT: '#053C55',  50: '#EAFDFE',  100: '#CDF9FC',  200: '#93EDF9',  300: '#5ADEF5',  400: '#20C9F2',  500: '#0C9DC9',  600: '#086A8F',  700: '#053C55',  800: '#042F47',  900: '#032338',  950: '#031E31'},
			},

			animation: {
				floating: "floating 5s ease-in-out infinite",
			},

			keyframes: {
				floating: {
					"0%": { 
						transform: "scale(1) translateY(0px)"
					},
					"50%": { 
						transform: "scale(1.1) translateY(-15px)" 
					},
					"100%": { 
						transform: "scale(1) translateY(0px)" 
					}
				},
			
			},
		},
	},
	plugins: [],
}
