import { FC } from 'react'
import s from './FormInput.module.scss'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: string
}

export const FormInput: FC<FormInputProps> = ({ error, ...rest }) => {
	return (
		<div className={s.inputWrapper}>
			<input className={`${s.input} ${error ? s.input__Error : ''}`} {...rest} />
			{error && <span className={s.input__error}>{error}</span>}
		</div>
	)
}
