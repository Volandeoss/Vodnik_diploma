import Link from 'next/link'

export default function Footer() {
	return (
		<footer className="bg-primary text-white">
			<div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact Us</h3>
						<div className="space-y-2">
							<p>mail@nuwm.edu.ua</p>
							<p>+380 123 456 789</p>
							<p>Україна, 33028, м. Рівне, вул. Соборна 11</p>
						</div>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Quick Links</h3>
						<ul className="space-y-2">
							{['Головна', 'Конференції', 'Новини', 'Про нас'].map((item) => (
								<li key={item}>
									<Link
										href={`/${item.toLowerCase()}`}
										className="hover:text-accent transition-colors duration-200"
									>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">Ресурси</h3>
						<ul className="space-y-2">
							{['Випуски', 'Організатори', 'FAQ'].map((item) => (
								<li key={item}>
									<Link
										href={`/${item.toLowerCase()}`}
										className="hover:text-accent transition-colors duration-200"
									>
										{item}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-4">About University</h3>
						<p className="text-sm">
							Національний університет водного господарства та природокористування
						</p>
						<p className="text-sm mt-2">
							1915 - {new Date().getFullYear()}
						</p>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-white/10">
					<p className="text-center text-sm">
						© {new Date().getFullYear()} Національний університет водного господарства та природокористування.
					</p>
				</div>
			</div>
		</footer>
	)
}