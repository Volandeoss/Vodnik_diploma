"use client"
import { useState } from 'react'
import Link from 'next/link'
import Button from '@ui/Buttons/AuthButton'

interface SubMenuItem {
	name: string
	link: string
}

interface MenuItem {
	name: string
	link?: string
	subMenu?: SubMenuItem[]
}

const MENU: MenuItem[] = [
	{ name: 'Головна', link: '/' },
	{
		name: 'Конференції',
		subMenu: [
			{ name: 'Конференція 1', link: '/conference1' },
			{ name: 'Конференція 2', link: '/conference2' },
		],
	},
	{ name: 'Про нас', link: '/about' },
	{ name: 'Випуски', link: '/releases' },
	{ name: 'Новини', link: '/news' },
	{ name: 'Організатори', link: '/organizations' },
]

export default function Header() {
	const [openDropdown, setOpenDropdown] = useState<number | null>(null)

	const toggleDropdown = (index: number) => {
		setOpenDropdown(openDropdown === index ? null : index)
	}

	return (
		<header className='border-b border-sky-800 border-opacity-25'>
			<div className='flex justify-between items-center px-6 py-4'>
				<nav className='flex items-center space-x-10'>
					<Link href='/'>
						<img src='nuwm.svg' alt='NUWM Logo' className='w-12' />
					</Link>
					<ul className='text-sky-900 font-bold flex space-x-4'>
						{MENU.map((item, index) => (
							<li
								className='relative transition duration-150 transform hover:scale-95'
								key={item.name}
								onMouseEnter={() => item.subMenu && toggleDropdown(index)}
								onMouseLeave={() => item.subMenu && toggleDropdown(index)}
							>
								<Link href={item.link || '#'}>
									{item.name}
								</Link>
								{item.subMenu && openDropdown === index && (
									<ul className='absolute left-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg mt-1'>
										{item.subMenu.map((subItem) => (
											<li key={subItem.name} className='px-4 py-2 hover:bg-gray-100'>
												<Link href={subItem.link}>{subItem.name}</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</nav>
				<div>
					<Button name='Увійти' onClick={() => alert('Увійти')} />
					<Button name='Зареєструватися' onClick={() => alert('Зареєструватися')} />
				</div>
			</div>
		</header>
	)
}
