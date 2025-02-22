/** @type {import("prettier").Config} */
export default {
  "tailwindEntryPoint": "./src/styles/global.css",
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
	tailwindFunctions: ['clsx'],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
