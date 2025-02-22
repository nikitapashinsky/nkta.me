import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import icon from 'astro-icon';

export default defineConfig({
	integrations: [react(), icon()],
	vite: {
		plugins: [tailwindcss()],
		define: {
			__APP_VERSION__: JSON.stringify(process.env.npm_package_version),
		},
	},
});
