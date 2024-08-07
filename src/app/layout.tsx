import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { cn } from '@/lib/utils';
import TanstackQueryProviders from '@/providers/tanstackQuery';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		default: 'Zequence Digital Inventory Management System',
		template: '%s | Zequence Digital Inventory Management System',
	},
	metadataBase: new URL('https://inventory-management-system.vercel.app'),
	description:
		'Inventory Management System is a web application that helps businesses manage their inventory.',
	keywords: [
		'Inventory Management System',
		'Inventory',
		'Management',
		'System',
		'Zequence',
		'Digital',
	],
	icons: {
		icon: [
			{
				url: '/favicon.ico',
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn(`antialiased  md:overflow-y-hidden`)}>
				<TanstackQueryProviders>{children}</TanstackQueryProviders>
			</body>
		</html>
	);
}
