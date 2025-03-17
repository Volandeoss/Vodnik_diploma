import Link from 'next/link'

export default function NewsPage() {
	// Данні новин
	const newsArticles = [
		{
			id: 1,
			title: "Запрошення до подачі статей: Управління водними ресурсами 2024",
			date: "2023-12-15",
			category: "Оголошення",
			summary: "Подайте свої наукові статті для майбутньої міжнародної конференції з управління водними ресурсами.",
			content: "Ми раді оголосити про початок прийому статей для конференції з управління водними ресурсами 2024. Ця міжнародна подія зіб'є провідних дослідників і практиків у сфері управління водними ресурсами та охорони навколишнього середовища.",
			author: "Комітет конференції"
		},
		{
			id: 2,
			title: "Нове наукове партнерство з європейськими університетами",
			date: "2023-12-10",
			category: "Партнерства",
			summary: "НУВГП встановлює нові наукові партнерства з провідними європейськими установами.",
			content: "Національний університет водного господарства та природокористування уклав нові наукові партнерства з кількома провідними європейськими установами, відкриваючи нові можливості для спільних досліджень і програм обміну студентами.",
			author: "Відділ зв'язків з університетом"
		},
		{
			id: 3,
			title: "Реєстрація на саміт з екологічного інжинірингу відкрито",
			date: "2023-12-05",
			category: "Події",
			summary: "Реєструйтесь зараз для участі у щорічному саміті з екологічного інжинірингу 2024.",
			content: "Реєстрація на саміт з екологічного інжинірингу 2024 відкрито. Рання реєстрація надає спеціальні знижки для студентів і науковців. Не пропустіть можливість взяти участь у одній з провідних конференцій з екологічного інжинірингу.",
			author: "Організаційний комітет події"
		}
	]

	return (
		<div className="bg-background py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Заголовок сторінки */}
				<div className="mb-12 text-center">
					<h1 className="text-4xl font-bold text-primary mb-4">Останні новини</h1>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Слідкуйте за останніми оголошеннями, подіями та новинами з нашої академічної спільноти.
					</p>
				</div>

				{/* Фільтри за категоріями */}
				<div className="mb-8">
					<div className="flex flex-wrap gap-2 justify-center">
						{['Усі', 'Оголошення', 'Події', 'Партнерства', 'Дослідження'].map((category) => (
							<button
								key={category}
								className={`px-4 py-2 rounded-full text-sm font-medium ${category === 'Усі'
									? 'bg-primary text-white'
									: 'bg-white text-gray-700 hover:bg-primary hover:text-white'
									} transition-colors duration-200`}
							>
								{category}
							</button>
						))}
					</div>
				</div>

				{/* Статті новин */}
				<div className="grid grid-cols-1 gap-8">
					{newsArticles.map((article) => (
						<article
							key={article.id}
							className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
						>
							<div className="p-6">
								<div className="flex items-center gap-4 mb-4">
									<span className="text-sm text-gray-500">
										{new Date(article.date).toLocaleDateString('uk-UA', {
											year: 'numeric',
											month: 'long',
											day: 'numeric'
										})}
									</span>
									<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-white">
										{article.category}
									</span>
								</div>

								<h2 className="text-2xl font-semibold text-primary mb-3">
									{article.title}
								</h2>

								<p className="text-gray-600 mb-4">
									{article.content}
								</p>

								<div className="flex items-center justify-between mt-6">
									<span className="text-sm text-gray-500">
										Автор: {article.author}
									</span>
									<Link
										href={`/news/${article.id}`}
										className="text-secondary hover:text-primary transition-colors duration-200"
									>
										Читати більше →
									</Link>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	)
}
