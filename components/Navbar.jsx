'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import profileDefault from '@/assets/images/profile-default.jpg'
import Link from 'next/link'
import { FaGoogle } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Navbar = () => {
  const { data: session } = useSession()
  const profilePicture = session?.user?.image
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [providers, setProviders] = useState(null)
  const pathname = usePathname()

  useEffect(() => {
    const setAuthProviders = async () => {
      const providers = await getProviders()
      setProviders(providers)
    }
    setAuthProviders()
  }, [])

  return (
    <nav className='bg-blue-700 border-b border-blue-500'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='relative flex h-20 items-center justify-between'>
          <div className='absolute inset-y-0 left-0 flex items-center md:hidden'>
            {/* <!-- Mobile menu button--> */}
            <button
              type='button'
              id='mobile-dropdown-button'
              className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
              aria-controls='mobile-menu'
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              <GiHamburgerMenu className='h-6 w-6' />
            </button>
          </div>

          <div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
            {/* <!-- Logo --> */}
            <Link className='flex flex-shrink-0 items-center' href='/'>
              <Image className='h-10 w-auto' src={logo} alt='CreationsPulse' />

              <span className='hidden md:block text-white text-2xl font-bold ml-2'>
                Artisans Alley
              </span>
            </Link>
            {/* <!-- Desktop Menu Hidden below md screens --> */}
            <div className='hidden md:ml-6 md:block'>
              <div className='flex space-x-2'>
                <Link
                  href='/'
                  className={clsx(
                    'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2',
                    pathname === '/' && 'bg-gray-900'
                  )}
                >
                  Home
                </Link>
                <Link
                  href='/creations'
                  className={clsx(
                    'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2',
                    pathname === '/creations' && 'bg-gray-900'
                  )}
                >
                  Creations
                </Link>
                {session && (
                  <Link
                    href='/creations/add'
                    className={clsx(
                      'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2',
                      pathname === '/creations/add' && 'bg-gray-900'
                    )}
                  >
                    Add Creations
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* <!-- Right Side Menu (Logged Out) --> */}
          {!session && (
            <div className='hidden md:block md:ml-6'>
              <div className='flex items-center'>
                {providers &&
                  Object.values(providers).map((provider, index) => (
                    <button
                      onClick={() => signIn(provider.id)}
                      key={index}
                      className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                    >
                      <FaGoogle className='mr-2 text-white' />
                      <span>Login or Register</span>
                    </button>
                  ))}
              </div>
            </div>
          )}

          {/* <!-- Right Side Menu (Logged In) --> */}
          {session && (
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
              <Link href='messages' className='relative group'>
                <button
                  type='button'
                  className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  <span className='absolute -inset-1.5'></span>
                  <span className='sr-only'>View notifications</span>
                  <IoIosNotifications className='h-6 w-6 rounded-full' />
                </button>
                <span className='absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full'>
                  2
                  {/* <!-- Replace with the actual number of notifications --> */}
                </span>
              </Link>
              {/* <!-- Profile dropdown button --> */}
              <div className='relative ml-3'>
                <div>
                  <button
                    type='button'
                    className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    id='user-menu-button'
                    aria-expanded={isProfileMenuOpen}
                    aria-haspopup='true'
                    onClick={() => setIsProfileMenuOpen((prev) => !prev)}
                  >
                    <span className='absolute -inset-1.5'></span>
                    <span className='sr-only'>Open user menu</span>
                    <Image
                      className='h-8 w-8 rounded-full'
                      src={profilePicture || profileDefault}
                      height={32}
                      width={32}
                      alt=''
                    />
                  </button>
                </div>

                {/* <!-- Profile dropdown --> */}
                {isProfileMenuOpen && (
                  <div
                    id='user-menu'
                    className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='user-menu-button'
                    tabIndex='-1'
                  >
                    <Link
                      href='/profile'
                      className='block px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-0'
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Your Profile
                    </Link>
                    <Link
                      href='/creations/saved'
                      className='block px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-2'
                      onClick={() => setIsProfileMenuOpen(false)}
                    >
                      Saved Creations
                    </Link>
                    <button
                      onClick={() => {
                      setIsProfileMenuOpen(false)
                      signOut()
                      }}
                      className='block px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-2'
                      
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      {isMobileMenuOpen && (
        <div id='mobile-menu'>
          <div className='space-y-1 px-2 pb-3 pt-2 md:hidden'>
            <Link
              href='/'
              className={clsx(
                'hover:bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium',
                pathname === '/' && 'bg-gray-900'
              )}
            >
              Home
            </Link>
            <Link
              href='/creations'
              className={clsx(
                'hover:bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium',
                pathname === '/creations' && 'bg-gray-900'
              )}
            >
              Creations
            </Link>
            {session && (
              <Link
                href='/creations/add'
                className={clsx(
                  'hover:bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium',
                  pathname === '/creations/add' && 'bg-gray-900'
                )}
              >
                Add Creations
              </Link>
            )}
            {!session &&
              providers &&
              Object.values(providers).map((provider, index) => (
                <button
                  onClick={() => signIn(provider.id)}
                  key={index}
                  className='flex items-center text-white bg-gray-700 hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
                >
                  <FaGoogle className='mr-2 text-white' />
                  <span>Login or Register</span>
                </button>
              ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
