import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {Link} from 'react-scroll'

const navigation = [
  { name: 'About Me', href: '#about', current: true },
  { name: 'Skills', href: '#skills', current: false },
  { name: 'Projects', href: '#projects', current: false },
  { name: 'Contact Me', href: '#contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden rounded-lg"
                    src="/imgonline-com-ua-resizeMPXaxGSc3T34nLH.jpg"
                    alt="Yassar Rich"
                  />
                  
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="/imgonline-com-ua-resizeMPXaxGSc3T34nLH.jpg"
                    alt="Yassar Rich"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
               
                  <div className="flex space-x-4">
                    {navigation.map((item) => (

                  <Link
                      key={item.name}
                      activeClass="active"
                      to={item.href}
                      spy={true}
                      smooth={true}
                      offset={-20}
                      duration={500}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}</Link>
                     

                    ))}
                  </div>
                </div>
              </div>
              <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/yassarrich/overlay/1635521640311/single-media-viewer?type=DOCUMENT&profileId=ACoAAC1MujYBJu3TLr6ngb9uZ-pk-10U7SI8vlE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BsaQdIv8qRjKuwziipwu2Dg%3D%3D" >
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {/* Resume */}
                    <h3 className='mr-2'>View Resume</h3>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg> */}
                </div>
              </a>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}