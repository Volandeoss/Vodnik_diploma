import React from 'react'
import Button from '../Buttons/Button'
export default function Thesis({
	thesisTitle,
	thesisFile,
	thesisStatus,
	author,
}) {
	return (
		<div className='grid grid-cols-2 gap-16 bg-slate-200 rounded-md mx-auto p-4'>
			<div className='text-left'>
				<h1>
					Назва: <span className='font-bold'>{thesisTitle}</span>
				</h1>
				<h2 className=''>
					Автор: <span className='font-bold'>{author}</span>
				</h2>
				<p>
					Статус: <span className='font-bold'>{thesisStatus}</span>
				</p>
				<p>
					Файли: <span className='font-bold cursor-pointer'>{thesisFile}</span>
				</p>
			</div>
			<div className='grid grid-cols-1 gap-2'>
				<Button name='Рецензування' />
				<Button name='Редагувати' />
				<Button name='Видалити' />
			</div>
		</div>
	)
}
