import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'
export const metadata = {
  title: 'ArtisansAlley | Find the best artisans in your area',
  description: 'Find your local artisans and support your local community',
  keywords:
    'artisan, local, community, craftsman, artist, handmade, local business, local artisans, local craftsman, local artist, local handmade, local business',
  author: 'ArtisansAlley',
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default MainLayout
