
export default function OrganizersPage() {
	const organizers = [
		{
			name: 'Проф. Анна Коваленко',
			role: 'Голова конференції',
			department: 'Інженерія водних ресурсів',
			image: '/placeholder-profile.jpg',
			description: 'Ведучий експерт з управління водними ресурсами з понад 20-річним досвідом академічних досліджень та практичних застосувань.'
		},
		{
			name: 'Докт. Віктор Петров',
			role: 'Голова технічної програми',
			department: 'Екологічна інженерія',
			image: '/placeholder-profile.jpg',
			description: 'Спеціалізується на системах охорони навколишнього середовища та сталому розвитку.'
		},
		{
			name: 'Докт. Марія Шевченко',
			role: 'Голова публікацій',
			department: 'Гідравлічна інженерія',
			image: '/placeholder-profile.jpg',
			description: 'Експерт з проектування гідравлічних систем та розвитку водної інфраструктури.'
		},
		{
			name: 'Проф. Олександр Іванов',
			role: 'Голова місцевої організації',
			department: 'Водопостачання та водовідведення',
			image: '/placeholder-profile.jpg',
			description: 'Спеціалізується на міському управлінні водними ресурсами та плануванні інфраструктури.'
		}
	]

	const committees = [
		{
			name: 'Науковий комітет',
			members: [
				'Проф. Джон Сміт, Стенфордський університет',
				'Докт. Емма Вілсон, Оксфордський університет',
				'Проф. Ханс Мюллер, ТУ Берлін',
				'Докт. Софі Чен, Національний університет Сінгапуру'
			]
		},
		{
			name: 'Програмний комітет',
			members: [
				'Докт. Майкл Браун, МІТ',
				'Проф. Лаура Мартінес, Університет Барселони',
				'Докт. Олександр Петров, Московський державний університет',
				'Проф. Сара Джонсон, Торонто'
			]
		}
	]

	return (
		<div className="bg-background">
			{/* Герой секція */}
			<section className="relative bg-primary text-white py-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
							Організатори конференції
						</h1>
						<p className="text-xl text-gray-100 max-w-3xl mx-auto">
							Ознайомтесь з командою, що організовує наші міжнародні конференції з водних ресурсів та екологічної інженерії.
						</p>
					</div>
				</div>
			</section>

			{/* Основні організатори */}
			<section className="py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-primary text-center mb-12">
						Організаційний комітет
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{organizers.map((organizer) => (
							<div key={organizer.name} className="bg-white rounded-lg shadow-md overflow-hidden">
								<div className="p-6">
									<h3 className="text-xl font-semibold text-primary mb-2">{organizer.name}</h3>
									<p className="text-secondary font-medium mb-2">{organizer.role}</p>
									<p className="text-gray-600 text-sm mb-4">{organizer.department}</p>
									<p className="text-gray-600 text-sm">{organizer.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Комітети */}
			<section className="py-16 bg-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-primary text-center mb-12">
						Конференційні комітети
					</h2>
					<div className="grid md:grid-cols-2 gap-8">
						{committees.map((committee) => (
							<div key={committee.name} className="bg-background rounded-lg shadow-md p-6">
								<h3 className="text-2xl font-semibold text-primary mb-6">{committee.name}</h3>
								<ul className="space-y-3">
									{committee.members.map((member) => (
										<li key={member} className="flex items-center">
											<svg className="h-5 w-5 text-secondary mr-2" fill="currentColor" viewBox="0 0 20 20">
												<path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
											</svg>
											<span className="text-gray-700">{member}</span>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Контактна секція */}
			<section className="py-16">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="bg-white rounded-lg shadow-md p-8">
						<h2 className="text-3xl font-bold text-primary text-center mb-8">
							Зв'язатися з нами
						</h2>
						<p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
							Є питання до нашого організаційного комітету? Зв'яжіться з нами з будь-якими запитаннями щодо організації конференції, подачі матеріалів або участі.
						</p>
						<div className="flex justify-center">
							<a href="mailto:conference@university.edu" className="btn-primary">
								Зв'язатися з організаторами
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
