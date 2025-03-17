'use client'

import Link from 'next/link'
import Image from 'next/image'

const navigation = [
	{ name: 'Конференції', href: '/conferences' },
	{ name: 'Новини', href: '/news' },
	{ name: 'Про нас', href: '/about' },
	{ name: 'Організатори', href: '/organizers' },
	{ name: 'Випуски', href: '/publications' },
]

export default function Header() {
	return (
		<header className="bg-white shadow-md">
			<nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
				<div className="flex h-16 items-center justify-between">
					<div className="flex items-center">
						<Link href="/" className="flex items-center">
							<Image
								src="/nuwm.svg"
								alt="University Logo"
								width={40}
								height={40}
								className="h-10 w-auto"
							/>
							<span className="ml-3 text-xl font-semibold text-primary ">
								NUWM Conference
							</span>
						</Link>
					</div>
					<div className="hidden md:flex items-center space-x-4">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className="nav-link text-primary font-semibold"
							>
								{item.name}
							</Link>
						))}
						<button className="px-2 py-2 bg-sky-900 text-white font-bold rounded hover:bg-sky-800 transition duration-300 transform hover:scale-95">Увійти</button>
						<select className="ml-4 rounded-md border-gray-300 py-1 px-2 text-sm">
							<option value="en">EN</option>
							<option value="uk">UK</option>
						</select>
					</div>
				</div>
			</nav>
		</header>
	)
}