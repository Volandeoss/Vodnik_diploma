'use client'

import { useParams } from 'next/navigation'
import { Auth } from '@/modules/Auth/AuthPage'

export default function AuthPage() {
	const params = useParams()
	const slug = params?.slug as string

	return <Auth slug={slug} />
}
