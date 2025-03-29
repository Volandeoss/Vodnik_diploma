"use client"

import { useState } from "react"

interface UserProfile {
	fullName: string
	email: string
	role: string
}

const UserProfilePage = () => {
	const [user, setUser] = useState<UserProfile>({
		fullName: "Іваненко Іван Іванович",
		email: "ivanenko@example.com",
		role: "Адміністратор",
	})

	return (
		<div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
			<h2 className="text-2xl font-bold mb-4 text-center">Профіль користувача</h2>
			<div className="space-y-3">
				<div className="p-4 border rounded-lg">
					<p className="text-gray-700 font-semibold">ПІБ:</p>
					<p className="text-gray-900">{user.fullName}</p>
				</div>
				<div className="p-4 border rounded-lg">
					<p className="text-gray-700 font-semibold">Email:</p>
					<p className="text-gray-900">{user.email}</p>
				</div>
				<div className="p-4 border rounded-lg">
					<p className="text-gray-700 font-semibold">Роль:</p>
					<p className="text-gray-900">{user.role}</p>
				</div>
			</div>
		</div>
	)
}

export default UserProfilePage
