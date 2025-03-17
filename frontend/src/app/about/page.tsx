export default function AboutPage() {
	const stats = [
		{ label: 'Засновано', value: '1915' },
		{ label: 'Студенти', value: '10,000+' },
		{ label: 'Члени факультету', value: '500+' },
		{ label: 'Дослідницькі центри', value: '15' }
	]

	const departments = [
		'Інженерія водних ресурсів',
		'Екологічна інженерія',
		'Гідравлічна інженерія',
		'Водопостачання та водовідведення',
		'Гідрологія та гідрогеологія',
		'Охорона навколишнього середовища'
	]

	return (
		<div className="bg-background">
			{/* Герой-секція */}
			<section className="relative bg-primary text-white py-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
							Про наш університет
						</h1>
						<p className="text-xl text-gray-100 max-w-3xl mx-auto">
							Національний університет водних ресурсів та екологічного інжинірингу: століття досягнень у водному господарстві та екологічних дослідженнях.
						</p>
					</div>
				</div>
			</section>

			{/* Секція статистики */}
			<section className="py-12 bg-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
						{stats.map((stat) => (
							<div key={stat.label} className="text-center">
								<div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
								<div className="text-gray-600">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Секція місії */}
			<section className="py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-primary mb-6">Наша місія</h2>
							<p className="text-gray-600 mb-4">
								Просувати знання та навчання в галузі управління водними ресурсами та екологічного інжинірингу через інноваційні дослідження, освіту та практичні застосування.
							</p>
							<p className="text-gray-600">
								Ми прагнемо розробляти сталий підхід до глобальних проблем водних ресурсів та навколишнього середовища, одночасно виховуючи наступне покоління екологічних лідерів.
							</p>
						</div>
						<div className="bg-white p-8 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-primary mb-4">Ключові кафедри</h3>
							<ul className="space-y-3">
								{departments.map((dept) => (
									<li key={dept} className="flex items-center">
										<svg className="h-5 w-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
											<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
										</svg>
										{dept}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Секція контакту */}
			<section className="py-16 bg-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-primary mb-4">Зв'язатися з нами</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Маєте запитання щодо нашого університету чи програм? Наша команда готова допомогти.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-background p-6 rounded-lg text-center">
							<svg className="h-8 w-8 text-secondary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							<h3 className="text-lg font-semibold text-primary mb-2">Електронна пошта</h3>
							<p className="text-gray-600">contact@university.edu</p>
						</div>

						<div className="bg-background p-6 rounded-lg text-center">
							<svg className="h-8 w-8 text-secondary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							<h3 className="text-lg font-semibold text-primary mb-2">Телефон</h3>
							<p className="text-gray-600">+380 123 456 789</p>
						</div>

						<div className="bg-background p-6 rounded-lg text-center">
							<svg className="h-8 w-8 text-secondary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
							</svg>
							<h3 className="text-lg font-semibold text-primary mb-2">Адреса</h3>
							<p className="text-gray-600">вул. Соборна 11<br />м. Рівне, Україна, 33028</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
