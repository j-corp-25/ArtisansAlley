import InfoBox from './InfoBox'
const InfoBoxes = () => {
  return (
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 p-4 rounded-lg'>
          <InfoBox
            heading='For Artisan Shoppers'
            backgroundColor='bg-blue-100'
            buttonInfo={{
              text: 'Shop Now',
              link: '/creations',
              backgroundColor: 'bg-blue-500',
            }}
          >
            Discover unique, handcrafted items from local artisans. Find the
            perfect piece that speaks to you and supports small businesses.
          </InfoBox>
          <InfoBox
            heading='For Artisans & Crafters'
            backgroundColor='bg-pink-100'
            buttonInfo={{
              text: 'Sell Your Crafts',
              link: '/creations/add',
              backgroundColor: 'bg-pink-500',
            }}
          >
            Showcase your work and connect with customers looking for
              something special and handmade. Expand your reach and grow your
              business.
          </InfoBox>

        </div>
      </div>
    </section>
  )
}

export default InfoBoxes
