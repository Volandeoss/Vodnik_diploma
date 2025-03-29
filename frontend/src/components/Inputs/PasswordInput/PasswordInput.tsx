import { FC, useState } from 'react'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import s from './PasswordInput.module.scss'

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: string
}

export const PasswordInput: FC<PasswordInputProps> = ({ error, ...rest }) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible)
	}

	return (
		<div className={s.inputWrapper}>
			<input
				className={`${s.input} ${error ? s.input__Error : ''}`}
				{...rest}
				type={isPasswordVisible ? 'text' : 'password'}
			/>
			<span
				className={s.passwordToggle}
				onClick={togglePasswordVisibility}
				style={{ cursor: 'pointer' }}
			>
				{isPasswordVisible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
			</span>
			{error && <span className={s.input__error}>{error}</span>}
		</div>
	)
}
