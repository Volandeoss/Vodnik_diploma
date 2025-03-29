'use client'

import Register from './components/register/Register'
import Login from './components/login/Login'


interface AuthProps {
	slug: string
}

export const Auth: React.FC<AuthProps> = ({ slug }) => {
	return (
		<>
			{slug === 'login' && <Login />}
			{slug === 'register' && <Register />}
		</>
	)
}
