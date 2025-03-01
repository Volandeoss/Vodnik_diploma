import React from 'react'
import Link from 'next/link'

export default function SideMenu() {
	return (
		<aside className=' min-h-screen  bg-slate-100  shadow-lg text-slate-900'>
			<div className='p-4 font-bold text-lg border-b'>Меню</div>
			<ul className='space-y-2 p-4'>
				<li>
					<Link href='/' className='block py-2 px-4 rounded hover:bg-gray-200'>
						Моя черга
					</Link>
				</li>
				<li>
					<Link href='/' className='block py-2 px-4 rounded hover:bg-gray-200'>
						Подання
					</Link>
				</li>
				<li>
					<Link href='/' className='block py-2 px-4 rounded hover:bg-gray-200'>
						Рецензування
					</Link>
				</li>
				<li>
					<Link href='/' className='block py-2 px-4 rounded hover:bg-gray-200'>
						Дії та статистика
					</Link>
				</li>
				<li>
					<Link
						href='/conferences'
						className='block py-2 px-4 rounded hover:bg-gray-200'
					>
						Архів
					</Link>
				</li>
				<li>
					<Link
						href='/news'
						className='block py-2 px-4 rounded hover:bg-gray-200'
					>
						Сертифікати
					</Link>
				</li>
				<li>
					<Link
						href='/profile'
						className='block py-2 px-4 rounded hover:bg-gray-200'
					>
						Профіль
					</Link>
				</li>
			</ul>
		</aside>
	)
}
