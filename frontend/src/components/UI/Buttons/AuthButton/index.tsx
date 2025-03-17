import Link from 'next/link'
import React from 'react'

type Props = {
  name: string
  href: string
}

const Button: React.FC<Props> = (children) => {
  return (
    <button
      className="px-2 py-2 bg-sky-900 text-white font-bold rounded hover:bg-sky-800 transition duration-300 transform hover:scale-95"
      aria-label={name}
    >
      {children}
    </button>
  )
}

export default Button
