'use client'

import RegisterForm from './RegisterForm'
import s from '../../AuthPage.module.scss'

export default function Register() {
  return (
    <div className={s.container}>
      <div className={s.auth}>
        <RegisterForm />
      </div>
    </div>
  )
}
