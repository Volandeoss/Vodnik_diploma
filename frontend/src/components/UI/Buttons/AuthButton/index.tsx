import React from 'react'

type Props = {
  name: string
  onClick: () => void
}

const Button: React.FC<Props> = ({ name, onClick }) => {
  return (
    <button
      className="px-2 py-2 bg-sky-900 text-white font-bold rounded hover:bg-sky-800 transition duration-300 transform hover:scale-95"
      aria-label={name}
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default Button
