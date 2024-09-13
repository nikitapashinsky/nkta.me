/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	future: {
		hoverOnlyWhenSupported: true,
	},
	theme: {
		extend: {
			fontFamily: {
				mono: ['JetBrains Mono Variable', 'monospace'],
			},
		},
	},
	plugins: ['prettier-plugin-tailwindcss'],
};
