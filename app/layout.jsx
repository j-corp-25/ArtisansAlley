import '@/assets/styles/globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import AuthProvider from '@/components/Provider/AuthProvider'
export const metadata = {
  title: 'ArtisansAlley | Find the best artisans in your area',
  description: 'Find your local artisans and support your local community',
  keywords:
    'artisan, local, community, craftsman, artist, handmade, local business, local artisans, local craftsman, local artist, local handmade, local business',
  author: 'ArtisansAlley',
}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang='en'>
        <body>
          <header>
            <Navbar />
          </header>
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout
