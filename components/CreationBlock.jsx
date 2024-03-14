import Image from 'next/image'
import Link from 'next/link'
import { FaPalette, FaRuler, FaUser, FaMapMarkerAlt } from 'react-icons/fa'

const CreationBlock = ({ creation }) => {
  return (
    <div className='rounded-xl shadow-md relative'>
      <Image
        src={`/${creation.images[0]}`}
        alt={creation.title}
        style={{ aspectRatio: '1/1' }}
        sizes='100vw'
        width={0}
        height={0}
        className='w-full rounded-t-xl'
      />
      <div className='p-4'>
        <div className='text-left md:text-center lg:text-left mb-6'>
          <div className='text-gray-600'>{creation.category}</div>
          <h3 className='text-xl font-bold'>{creation.title}</h3>
        </div>
        <h3 className='absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right'>
          ${creation.price.amount}
        </h3>

        <div className='flex justify-normal gap-4 text-gray-500 mb-4'>
          <p>
            <FaPalette /> {creation.details.material}
          </p>
          <p>
            <FaRuler /> {creation.details.dimensions}
          </p>
        </div>

        <div className='border border-gray-100 mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='flex align-middle gap-2 mb-4 lg:mb-0'>
            <FaUser className='text-lg text-orange-700' />
            <span className='text-orange-700'>
              {creation.artisan_info.name} |{' '}
            </span>
            <FaMapMarkerAlt className='text-lg text-orange-700' />
            <span className='text-orange-700'>
              {creation.artisan_info.location}
            </span>
          </div>
          <Link
            href={`/creations/${creation._id}`}
            className='h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm'
          >
            View Craft
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreationBlock
