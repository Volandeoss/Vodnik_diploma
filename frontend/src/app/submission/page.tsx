"use client"

import { useState } from "react"

interface Submission {
	id: number
	title: string
	annotation: string
	keywords: string
	files: File[]
	status: string
}

const SubmissionPage = () => {
	const [submissions, setSubmissions] = useState<Submission[]>([])

	return (
		<div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
			<h2 className="text-2xl font-bold mb-4 text-center">Подання</h2>
			<button className="mb-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
				Новий рукопис
			</button>
			<table className="w-full border-collapse border border-gray-300">
				<thead>
					<tr className="bg-gray-200">
						<th className="border border-gray-300 px-4 py-2">Моя черга</th>
						<th className="border border-gray-300 px-4 py-2">ID</th>
						<th className="border border-gray-300 px-4 py-2">Назва</th>
						<th className="border border-gray-300 px-4 py-2">Анотація</th>
						<th className="border border-gray-300 px-4 py-2">Ключові слова</th>
						<th className="border border-gray-300 px-4 py-2">Файли</th>
						<th className="border border-gray-300 px-4 py-2">Статус</th>
						<th className="border border-gray-300 px-4 py-2">Дії</th>
					</tr>
				</thead>
				<tbody>
					{submissions.map((submission, index) => (
						<tr key={submission.id} className="text-center border border-gray-300">
							<td className="border border-gray-300 px-4 py-2">{index + 1}</td>
							<td className="border border-gray-300 px-4 py-2">{submission.id}</td>
							<td className="border border-gray-300 px-4 py-2">{submission.title}</td>
							<td className="border border-gray-300 px-4 py-2">{submission.annotation}</td>
							<td className="border border-gray-300 px-4 py-2">{submission.keywords}</td>
							<td className="border border-gray-300 px-4 py-2">{submission.files.length} файл(и)</td>
							<td className="border border-gray-300 px-4 py-2">{submission.status}</td>
							<td className="border border-gray-300 px-4 py-2">
								<button className="px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
									Редагувати
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default SubmissionPage
