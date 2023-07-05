import Header from '@/components/Header'
import './globals.css'
import { Kumbh_Sans } from 'next/font/google'

const kumbh_sans = Kumbh_Sans({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
	title: 'Ecommerce Product Page',
	description:
		'Frontend Mentor Challenge | Solved by Arpit Namdev | Developed using Next JS, Tailwind CSS and many more...',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={kumbh_sans.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}
