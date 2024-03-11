import creations from '@/creations.json'
import CreationBlock from '@/components/CreationBlock'
const CreationsPage = () => {
  return (
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        {creations.length === 0 ? (
          <div className='text-center col-span-3'>
            <p className='text-gray-500'>No beautiful creations found</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {creations.map((creation) => (
              <CreationBlock key={creation._id} creation={creation} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default CreationsPage
