

const CreationDetails = ({creation}) => {
  return (
    <main className='col-span-7'>
                  <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
                  <div className="text-gray-500 mb-4">{creation.category}</div>
                    <h1 className='text-3xl font-bold mb-4'>
                      {creation.title}
                    </h1>
                    <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
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
  )
}

export default CreationDetails
