import { defineConfig, fontProviders } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	devToolbar: {
		enabled: false,
	},
	adapter: cloudflare(),
	integrations: [react()],
	fonts: [
		{
			name: 'InterVariable',
			cssVariable: '--font-inter',
			provider: fontProviders.local(),
			featureSettings: "'case', 'calt', 'ss07', 'ss08'",
			options: {
				variants: [
					{
						weight: '100 900',
						style: 'normal',
						src: ['./public/fonts/InterVariable.woff2'],
					},
				],
			},
		},
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
