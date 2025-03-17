import Link from 'next/link'

export default function ConferencesPage() {
	// Тестові дані для конференцій
	const conferences = [
		{
			id: 1,
			title: "Управління водними ресурсами 2024",
			date: "15-17 березня 2024",
			topic: "Екологічна інженерія",
			type: "Гібридний",
			description: "Міжнародна конференція, присвячена сталому управлінню водними ресурсами та охороні навколишнього середовища.",
			deadline: "1 лютого 2024"
		},
		{
			id: 2,
			title: "Саміт екологічної інженерії",
			date: "20-22 квітня 2024",
			topic: "Екологічна наука",
			type: "Офлайн",
			description: "Щорічний саміт, на якому збираються експерти з екологічної інженерії та сталого розвитку.",
			deadline: "15 березня 2024"
		},
		{
			id: 3,
			title: "Конференція з інновацій в гідрології",
			date: "10-12 травня 2024",
			topic: "Гідрологія",
			type: "Онлайн",
			description: "Конференція, присвячена інноваційним підходам у гідрології та управлінні водними ресурсами.",
			deadline: "1 квітня 2024"
		}
	]

	return (
		<div className="bg-background py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Заголовок сторінки */}
				<div className="mb-12 text-center">
					<h1 className="text-4xl font-bold text-primary mb-4">Предстоящі конференції</h1>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Дізнайтесь про наші майбутні академічні конференції. Приєднуйтесь до провідних дослідників та професіоналів у вашій галузі.
					</p>
				</div>

				{/* Фільтри */}
				<div className="mb-8 bg-white p-6 rounded-lg shadow-md">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
						<select className="rounded-md border-gray-300 py-2 px-3 text-gray-700">
							<option value="">Усі теми</option>
							<option value="environmental">Екологічна інженерія</option>
							<option value="hydrology">Гідрологія</option>
							<option value="water">Управління водними ресурсами</option>
						</select>
						<select className="rounded-md border-gray-300 py-2 px-3 text-gray-700">
							<option value="">Усі типи</option>
							<option value="online">Онлайн</option>
							<option value="in-person">Офлайн</option>
							<option value="hybrid">Гібридний</option>
						</select>
						<select className="rounded-md border-gray-300 py-2 px-3 text-gray-700">
							<option value="">Усі дати</option>
							<option value="this-month">Цього місяця</option>
							<option value="next-month">Наступного місяця</option>
							<option value="next-3-months">Наступні 3 місяці</option>
						</select>
					</div>
				</div>

				{/* Список конференцій */}
				<div className="grid grid-cols-1 gap-6">
					{conferences.map((conference) => (
						<div
							key={conference.id}
							className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
						>
							<div className="p-6">
								<div className="flex justify-between items-start">
									<div>
										<h2 className="text-2xl font-semibold text-primary mb-2">
											{conference.title}
										</h2>
										<p className="text-gray-600 mb-4">{conference.description}</p>
									</div>
									<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-white">
										{conference.type}
									</span>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
									<div>
										<span className="text-sm font-medium text-gray-500">Дата</span>
										<p className="text-gray-900">{conference.date}</p>
									</div>
									<div>
										<span className="text-sm font-medium text-gray-500">Тема</span>
										<p className="text-gray-900">{conference.topic}</p>
									</div>
									<div>
										<span className="text-sm font-medium text-gray-500">Кінцевий термін подачі</span>
										<p className="text-gray-900">{conference.deadline}</p>
									</div>
								</div>

								<div className="mt-6 flex justify-end">
									<Link
										href={`/conferences/${conference.id}`}
										className="btn-primary"
									>
										Детальніше
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
