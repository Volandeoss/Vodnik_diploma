
export default function Footer() {
	return (
		<footer className=' text-sky-900 font-bold py-6 border-t border-sky-800	border-opacity-25'>
			<div className='max-w-4xl mx-auto text-center space-y-4'>
				{/* Адреса електронної пошти */}
				<p className='text-sm'>Електронна пошта: info@nuwm.edu.ua</p>

				{/* Контактний номер телефону */}
				<p className='text-sm'>Телефон: +380 (362) 63-53-49</p>

				{/* Навігація */}
				<nav className='text-sm space-x-4'>
					<span>Головна</span>
					<span>Про нас</span>
					<span>Контакти</span>
					<span>Новини</span>
				</nav>

				{/* Назва університету та роки існування */}
				<p className='text-xs mt-4'>
					Національний університет водного господарства та природокористування ©
					1915–2025
				</p>
			</div>
		</footer>
	)
}
