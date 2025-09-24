import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import { Footer, Header } from '@/modules'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'

const workSans = Work_Sans({
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'NFT MARKETPLACE',
	description: 'Discover digital art & Collect NFTs',
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: string }>
}>) {
	const { locale } = await params
	if (!hasLocale(routing.locales, locale)) {
		notFound()
	}
	return (
		<html lang={locale}>
			<head>
				<link rel='icon' href='/site-logo.svg' />
			</head>
			<body className={`${workSans.className} antialiased`}>
				<NextIntlClientProvider>
					<Header />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
