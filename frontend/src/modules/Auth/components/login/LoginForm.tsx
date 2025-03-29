'use client'

import { useForm } from 'react-hook-form'
import s from '../../AuthPage.module.scss'
import { useState } from 'react'
import { FormInput } from '@/components/Inputs/FormInput/FormInput'
import { PasswordInput } from '@/components/Inputs/PasswordInput/PasswordInput'
import { Checkbox } from 'antd'
import Link from 'next/link'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema } from '../shema'

interface LoginFormInputs {
  email: string
  password: string
}

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(LoginSchema()),
    mode: 'onTouched',
  })

  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      console.log('Logging in with:', data)
    } catch (error) {
      setErrorMessage('Invalid email or password')
    }
  }

  return (
    <div className={s.loginForm}>
      <h1>Увійти</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        {errorMessage && <p className={s.error}>{errorMessage}</p>}

        <div className={s.form__inputs}>
          <FormInput
            placeholder='Email'
            type='email'
            {...register('email')}
            error={errors.email?.message}
          />

          <PasswordInput
            placeholder='Пароль'
            {...register('password')}
            error={errors.password?.message}
          />
          <div className={s.form__checkboxContainer}>
            <Checkbox>Запам’ятати мене</Checkbox>
            <Link href='/auth/reset-password' className={s.form__forgotPassword}>
              Забули пароль?
            </Link>
          </div>
        </div>

        <div className={s.form__buttonWrapper}>
          <button type='submit' disabled={isSubmitting} className={s.authButton}>
            Увійти
          </button>
        </div>

        <div className={s.form__redirect}>
          <p>Немає облікового запису?</p>
          <Link href='/auth/register'>Зареєструватися</Link>
        </div>
      </form>
    </div>
  )
}
