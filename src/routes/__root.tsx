/// <reference types="vite/client" />
import { HeadContent, Outlet, Scripts, createRootRoute } from '@tanstack/react-router';
import styles from '~/styles.css?url';

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width' },
			{ title: 'Nikita Pashinsky' },
		],
		links: [
			{
				rel: 'preload',
				href: '/fonts/InterVariable.woff2',
				as: 'font',
				type: 'font/woff2',
				crossOrigin: 'anonymous',
			},
			{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
			{ rel: 'stylesheet', href: styles },
		],
	}),
	shellComponent: RootDocument,
	component: RootComponent,
});

function RootComponent() {
	return <Outlet />;
}

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}
