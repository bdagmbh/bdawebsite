/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#D32F2F',    // Brand Red
				secondary: '#1F2937',  // Premium Gray/Anthracite
				accent: '#EF4444',     // Lighter Red for hover/accents
				background: '#FAFAFA', // Light Gray
				surface: '#FFFFFF',    // White
			},
			fontFamily: {
				sans: ['Inter', 'Roboto', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
