'use client';

import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center'>
      <h1 className='text-6xl font-bold text-red-600'>404</h1>
      <h2 className='text-2xl font-semibold mt-4'>Сторінку не знайдено</h2>
      <p className='text-gray-600 mt-2'>
        Можливо, ви помилилися у введенні URL або сторінка була видалена.
      </p>
      <Link
        href='/'
        className='mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'
      >
        На головну
      </Link>
    </div>
  );
};

export default Custom404;
