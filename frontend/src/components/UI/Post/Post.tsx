import React, { useState } from 'react'

export const Post = () => {
	const [text, setText] = useState('')
	const [file, setFile] = useState(null)

	const handleFileChange = e => {
		setFile(e.target.files[0])
	}

	const handleTextChange = e => {
		setText(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()

		if (!file || !text) {
			alert('Будь ласка, додайте файл і текст!')
			return
		}

		console.log('Завантажений файл:', file)
		console.log('Текст:', text)

		setFile(null)
		setText('')
		alert('Пост створено успішно!')
	}

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-white'>
			<div className='w-full max-w-lg p-6 bg-white rounded-lg shadow-md'>
				<h1 className='text-2xl font-bold text-center mb-4'>Додати пост</h1>
				<form onSubmit={handleSubmit} className='space-y-4'>
					{/* Завантаження файлу */}
					<div>
						<label className='block text-sm font-medium text-sky-700'>
							Завантажити файл
						</label>
						<input
							type='file'
							accept='docx/*'
							onChange={handleFileChange}
							className='mt-1 block w-full text-sm text-gray-700 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-slate-50'
						/>
					</div>
					<div>
						<label className='block text-sm font-medium text-sky-900'>
							Введіть текст
						</label>
						<textarea
							value={text}
							onChange={handleTextChange}
							rows='4'
							className='mt-1 block w-full text-sm text-sky-900 border border-gray-300 rounded-md shadow-sm focus:border-sky-600 focus:ring-blue-500 bg-white'
							placeholder='Напишіть щось цікаве...'
						></textarea>
					</div>

					<button
						type='submit'
						className='w-full px-4 py-2 text-white bg-sky-900 hover:bg-sky-800 rounded-md shadow-sm'
					>
						Додати пост
					</button>
				</form>

				{file && (
					<div className='mt-6'>
						<h2 className='text-lg font-semibold mb-2'>Попередній перегляд:</h2>
						<img
							src={URL.createObjectURL(file)}
							alt='Preview'
							className='w-full h-48 object-cover rounded-md'
						/>
						<p className='mt-2 text-gray-700'>{text}</p>
					</div>
				)}
			</div>
		</div>
	)
}


