import CreationBlock from './CreationBlock'
import Link from 'next/link'

const fetchCreations = async () =>{
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/creations`,{
      cache: 'no-store',
    })
    if (!response.ok) {
      throw new Error('Something went wrong')
    }
    return response.json()
  } catch (error) {
    console.log(error)

  }
}

const HomeCreations = async () => {
  const creations = await fetchCreations()
  const recentCreations = creations
    .sort(() => Math.random() - Math.random())
    .slice(0, 3)
  return (
    <>
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto'>
          <h2 className='text-3xl font-bold text-blue-500 mb-6 text-center'>
            Recent Creations
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {recentCreations === 0 ? (
              <p className='text-center col-span-3 text-gray-500'>
                No beautiful creations found
              </p>
            ) : (
              recentCreations.map((creation) => (
                <CreationBlock key={creation._id} creation={creation} />
              ))
            )}
          </div>
        </div>
      </section>

      <section className='m-auto max-w-lg my-10 px-6'>
        <Link
          href='/creations'
          className='block bg-blue-500 text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700 text-xl font-bold'
        >
          View All Creations
        </Link>
      </section>
    </>
  )
}

export default HomeCreations
