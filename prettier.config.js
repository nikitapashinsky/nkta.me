/** @type {import("prettier").Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
	printWidth: 100,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	plugins: ['prettier-plugin-tailwindcss'],
	tailwindStylesheet: './src/styles.css',

	overrides: [
		{
			files: ['*.toml', '*.yml'],
			options: {
				useTabs: false,
			},
		},
		{
			files: ['*.mdx', '*.md'],
			options: {
				printWidth: 80,
			},
		},
	],
};
