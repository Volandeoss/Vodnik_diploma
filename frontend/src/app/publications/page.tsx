
export default function PublicationsPage() {
	const publications = [
		{
			id: 1,
			title: "Сучасні технології очищення води",
			authors: "Анна Коваленко, Віктор Петров та ін.",
			conference: "Управління водними ресурсами 2023",
			abstract: "Ця стаття представляє інноваційні підходи до очищення води за допомогою сталих технологій...",
			keywords: ["очищення води", "сталість", "інновації"],
			year: 2023,
			citations: 12
		},
		{
			id: 2,
			title: "Оцінка впливу на навколишнє середовище міських водних систем",
			authors: "Марія Шевченко, Олександр Іванов та ін.",
			conference: "Саміт з екологічного інженерії 2023",
			abstract: "Всеосяжне дослідження екологічних впливів у системах управління міськими водними ресурсами...",
			keywords: ["міські води", "екологічний вплив", "оцінка"],
			year: 2023,
			citations: 8
		},
		{
			id: 3,
			title: "Сталий підхід у гідравлічному інжинірингу",
			authors: "Віктор Петров, Софі Чен та ін.",
			conference: "Конференція з інновацій в гідрології 2023",
			abstract: "Аналіз впровадження сталих практик у сучасних проектах гідравлічного інжинірингу...",
			keywords: ["гідравлічний інжиніринг", "сталість", "інновації"],
			year: 2023,
			citations: 15
		}
	]

	const categories = [
		"Водні ресурси",
		"Екологічне інженерство",
		"Гідравлічні системи",
		"Сталий розвиток",
		"Управління міськими водними ресурсами",
		"Якість води"
	]

	const years = [2023, 2022, 2021, 2020, 2019]

	return (
		<div className="bg-background">
			{/* Герой секція */}
			<section className="relative bg-primary text-white py-20">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center">
						<h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
							Публікації на конференціях
						</h1>
						<p className="text-xl text-gray-100 max-w-3xl mx-auto">
							Ознайомтесь з нашою колекцією рецензованих публікацій з попередніх конференцій.
						</p>
					</div>
				</div>
			</section>

			{/* Секція фільтрів */}
			<section className="py-8 bg-white border-b">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<select className="rounded-md border-gray-300 py-2 px-3 text-gray-700">
							<option value="">Всі категорії</option>
							{categories.map((category) => (
								<option key={category} value={category.toLowerCase()}>
									{category}
								</option>
							))}
						</select>
						<select className="rounded-md border-gray-300 py-2 px-3 text-gray-700">
							<option value="">Всі роки</option>
							{years.map((year) => (
								<option key={year} value={year}>
									{year}
								</option>
							))}
						</select>
						<input
							type="text"
							placeholder="Шукати публікації..."
							className="rounded-md border-gray-300 py-2 px-3 text-gray-700"
						/>
					</div>
				</div>
			</section>

			{/* Список публікацій */}
			<section className="py-12">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="space-y-6">
						{publications.map((publication) => (
							<div
								key={publication.id}
								className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
							>
								<div className="flex justify-between items-start">
									<div>
										<h2 className="text-2xl font-semibold text-primary mb-2">
											{publication.title}
										</h2>
										<p className="text-gray-600 mb-2">{publication.authors}</p>
										<p className="text-secondary mb-4">{publication.conference}</p>
										<p className="text-gray-600 mb-4">{publication.abstract}</p>
										<div className="flex flex-wrap gap-2 mb-4">
											{publication.keywords.map((keyword) => (
												<span
													key={keyword}
													className="bg-background text-gray-700 px-3 py-1 rounded-full text-sm"
												>
													{keyword}
												</span>
											))}
										</div>
									</div>
									<div className="text-right">
										<p className="text-gray-500">Рік: {publication.year}</p>
										<p className="text-gray-500">Цитування: {publication.citations}</p>
									</div>
								</div>
								<div className="flex justify-end mt-4 space-x-4">
									<button className="text-secondary hover:text-primary transition-colors duration-200">
										Завантажити PDF
									</button>
									<button className="text-secondary hover:text-primary transition-colors duration-200">
										Цитувати
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Статистика публікацій */}
			<section className="py-16 bg-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-primary text-center mb-12">
						Статистика публікацій
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{[
							{ label: 'Загальні публікації', value: '150+' },
							{ label: 'Автори', value: '300+' },
							{ label: 'Загальні цитати', value: '1,200+' },
							{ label: 'Конференції', value: '15' }
						].map((stat) => (
							<div key={stat.label} className="text-center">
								<div className="text-3xl font-bold text-secondary mb-2">{stat.value}</div>
								<div className="text-gray-600">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}
