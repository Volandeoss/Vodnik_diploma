'use client'

import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterSchema } from '../shema'
import { useForm, Controller } from 'react-hook-form'
import { useState } from 'react'
import s from '../../AuthPage.module.scss'
import { FormInput } from '@/components/Inputs/FormInput/FormInput'
import { PasswordInput } from '@/components/Inputs/PasswordInput/PasswordInput'
import { Checkbox } from 'antd'
import Link from 'next/link'

interface RegisterFormInputs {
  first_name: string
  email: string
  phone: string
  password: string
  confirmPassword: string
  terms: boolean
}

export default function RegisterForm() {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormInputs>({
    resolver: yupResolver(RegisterSchema()),
    mode: 'onTouched',
    defaultValues: {
      terms: false,
    },
  })
  const [errorMessage, setErrorMessage] = useState('')

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      console.log('Registering with:', data)
    } catch (error) {
      setErrorMessage('Помилка при реєстрації')
    }
  }

  return (
    <div className={s.registerForm}>
      <h1>Зареєструватися</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        <div className={s.form__inputs}>
          <FormInput
            placeholder="Ім'я"
            {...register('first_name')}
            error={errors.first_name?.message}
          />
          <FormInput
            placeholder='Email'
            type='email'
            {...register('email')}
            error={errors.email?.message}
          />
          <FormInput
            placeholder='Контактний телефон'
            type='tel'
            {...register('phone')}
            error={errors.phone?.message}
          />
          <PasswordInput
            placeholder='Пароль'
            {...register('password')}
            error={errors.password?.message}
            type='password'
          />
          <PasswordInput
            placeholder='Підтвердження паролю'
            {...register('confirmPassword')}
            error={errors.confirmPassword?.message}
            type='password'
          />
          <div className={s.form__checkbox}>
            <Controller
              name='terms'
              control={control}
              rules={{
                required: errors.terms?.message,
              }}
              render={({ field }) => (
                <Checkbox {...field} checked={field.value}>
                  Продовжуючи, ви надаєте згоду на створення облікового запису,
                  та згоду на обробку персональних даних
                </Checkbox>
              )}
            />
            <p className={s.CheckError}>{errors.terms?.message}</p>
          </div>
        </div>
        <div className={s.form__buttonWrapper}>
          <button type='submit' disabled={isSubmitting} className={s.authButton}>
            Зареєструватися
          </button>
        </div>
        <div className={s.form__redirect}>
          <p>Маєте обліковий запис?</p>
          <Link href='/auth/login'>Увійти</Link>
        </div>
      </form>
    </div>
  )
}
