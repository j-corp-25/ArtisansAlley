import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NotFoundPage = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-300 '>
      <div className='max-w-md'>
        <Image
          src='/notfound.webp' // Path to a creative 404 image relevant to your theme
          alt='Lost in the Craft'
          className=' mb-8 w-full rounded-t-xl'
          width={0}
          height={0}
          sizes='100vw'
        />
        <h1 className='text-6xl font-bold text-white mb-4'>Oops!</h1>
        <p className='text-xl text-white mb-6'>
          It seems you've strayed into uncharted territory.
        </p>
        <Link
          href='/'
          className='inline-block bg-white text-indigo-700 hover:bg-indigo-50 font-bold py-3 px-6 rounded-lg transition-colors duration-200'
        >
          Return to Crafted Paths
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
