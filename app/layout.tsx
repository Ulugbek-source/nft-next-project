import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import { Footer, Header } from '@/modules'

const workSans = Work_Sans({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'NFT MARKETPLACE',
	description: 'Discover digital art & Collect NFTs',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/site-logo.svg' />
			</head>
			<body className={`${workSans.className} antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
