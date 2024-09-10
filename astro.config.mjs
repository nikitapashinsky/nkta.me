import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react(), icon()],
	vite: {
		define: {
			__APP_VERSION__: JSON.stringify(process.env.npm_package_version),
		},
	},
});
