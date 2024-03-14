'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { fetchCreation } from '@/utils/getRequests'
import { FaArrowLeft, FaHashtag } from 'react-icons/fa'
import CreationHeaderBG from '@/components/CreationHeaderBG'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  const { id } = useParams()
  const [creation, setCreation] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCreationById = async () => {
      if (!id) return
      try {
        const creation = await fetchCreation(id)
        setCreation(creation)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    if (creation === null) {
      fetchCreationById()
    }
  }, [id, creation])
  console.log(creation)

  return (
    <>
      {!loading && creation && (
        <>
          <section>
            <CreationHeaderBG image={creation.images[0]} />
          </section>

          <section>
            <div class='container m-auto py-6 px-6'>
              <Link
                href='/creations'
                class='text-blue-500 hover:text-blue-600 flex items-center'
              >
                <FaArrowLeft /> Back to Creations
              </Link>
            </div>
          </section>
          <section className='bg-pink-50'>
            <div className='container m-auto py-10 px-6'>
              <div className='grid grid-cols-1 md:grid-cols-5 w-full gap-6'>
                <main className='col-span-4'>
                  <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                    <h1 className='text-3xl font-bold mb-4'>
                      {creation.title}
                    </h1>
                    <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
                      <i className='fa-solid fa-palette text-lg text-orange-700 mr-2'></i>
                      <div className='text-orange-700 flex flex-col'>
                        <span>{creation.artisan_info.name}</span>
                        <span>{creation.artisan_info.location}</span>
                      </div>
                    </div>

                    <h3 className='text-lg font-bold my-6 bg-gray-800 text-white p-2'>
                      Pricing & Details
                    </h3>

                    <div className='flex flex-col md:flex-row items-center justify-between mb-4 gap-5'>
                      <div>
                        <div className='text-gray-500 mr-2 font-bold'>
                          Price
                        </div>
                        <div className='text-2xl font-bold text-blue-500'>
                          {creation.price.currency}
                          {creation.price.amount}
                        </div>
                      </div>

                      <div>
                        <div className='text-gray-500 mr-2 font-bold'>
                          Material
                        </div>
                        <div className='text-2xl font-bold text-blue-500'>
                          {creation.details.material}
                        </div>
                      </div>

                      <div>
                        <div className='text-gray-500 mr-2 font-bold'>
                          Color
                        </div>
                        <div className='text-2xl font-bold text-blue-500'>
                          {creation.details.color}
                        </div>
                      </div>

                      <div>
                        <div className='text-gray-500 mr-2 font-bold'>
                          Dimensions
                        </div>
                        <div className='text-2xl font-bold text-blue-500'>
                          {creation.details.dimensions}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                    <h3 className='text-lg font-bold mb-6'>
                      Description & Craftsmanship
                    </h3>
                    <p className='text-gray-500 mb-4'>{creation.description}</p>
                  </div>

                  <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
                    <h3 className='text-lg font-bold mb-6'>Tags</h3>
                    <div className='flex flex-wrap gap-4 text-green-600 mb-4'>
                      {creation.tags.map((tag) => (
                        <span>#{tag}</span>
                      ))}
                    </div>
                  </div>
                </main>

                <aside className='space-y-4'>
                  <button className='bg-pink-500 hover:bg-pink-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'>
                    <i className='fas fa-heart mr-2'></i> Favorite
                  </button>
                  <button className='bg-teal-500 hover:bg-teal-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center'>
                    <i className='fas fa-share mr-2'></i> Share Craft
                  </button>

                  {/* Contact Artisan Form */}
                  <div className='bg-white p-6 rounded-lg shadow-md'>
                    <h3 className='text-xl font-bold mb-6'>
                      Contact the Artisan
                    </h3>
                    <form>
                      <div className='mb-4'>
                        <label
                          className='block text-gray-700 text-sm font-bold mb-2'
                          htmlFor='name' // Use htmlFor instead of for in JSX
                        >
                          Your Name:
                        </label>
                        <input
                          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='name'
                          type='text'
                          placeholder='Enter your name'
                          required
                        />
                      </div>
                      <div className='mb-4'>
                        <label
                          className='block text-gray-700 text-sm font-bold mb-2'
                          htmlFor='email'
                        >
                          Your Email:
                        </label>
                        <input
                          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='email'
                          type='email'
                          placeholder='Enter your email'
                          required
                        />
                      </div>
                      <div className='mb-4'>
                        <label
                          className='block text-gray-700 text-sm font-bold mb-2'
                          htmlFor='phone'
                        >
                          Your Phone (optional):
                        </label>
                        <input
                          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                          id='phone'
                          type='text'
                          placeholder='Enter your phone number'
                        />
                      </div>
                      <div className='mb-4'>
                        <label
                          className='block text-gray-700 text-sm font-bold mb-2'
                          htmlFor='message'
                        >
                          Your Message:
                        </label>
                        <textarea
                          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline'
                          id='message'
                          placeholder='Enter your message'
                        ></textarea>
                      </div>
                      <div>
                        <button
                          className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center'
                          type='submit'
                        >
                          <i className='fas fa-paper-plane mr-2'></i> Send
                          Message to Artisan
                        </button>
                      </div>
                    </form>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default page
