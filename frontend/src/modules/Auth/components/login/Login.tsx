import React from 'react'
import LoginForm from './LoginForm'

import s from '../../AuthPage.module.scss'

export default function Login() {
  return (
    <div className={s.container}>
      <div className={s.auth}>
        <LoginForm />
      </div>
    </div>
  )
}
