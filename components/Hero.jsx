
const Hero = () => {
  return (
    <section className='bg-indigo-700 py-20 mb-4'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold text-white sm:text-5xl md:text-6xl'>
            Discover Handcrafted Treasures
          </h1>
          <p className='my-4 text-xl text-white'>
            Explore unique, artisan-made products tailored to your taste.
          </p>
        </div>
        <form className='mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'>
          <div className='w-full md:w-3/5 md:pr-2 mb-4 md:mb-0'>
            <label htmlFor='search' className='sr-only'>
              Search for products
            </label>
            <input
              type='text'
              id='search'
              placeholder='Search for products (e.g., jewelry, pottery, textiles)'
              className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-indigo-500'
            />
          </div>
          <div className='w-full md:w-2/5 md:pl-2'>
            <label htmlFor='category' className='sr-only'>
              Category
            </label>
            <select
              id='category'
              className='w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-indigo-500'
            >
              <option value='All'>All Categories</option>
              <option value='Paintings'>Paintings</option>
              <option value='Sculptures'>Sculptures</option>
              <option value='Woodwork'>Woodwork</option>
              <option value='Textiles'>Textiles</option>
              <option value='Jewelry'>Jewelry</option>
              <option value='Pottery'>Pottery</option>
              <option value='Other'>Other Crafts</option>
            </select>
          </div>
          <button
            type='submit'
            className='md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-500'
          >
            Find Crafts
          </button>
        </form>
      </div>
    </section>
  )
}

export default Hero
