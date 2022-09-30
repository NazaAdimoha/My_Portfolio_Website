import Image from 'next/image'
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        {/* Incorporate lazy loading of Image */}
        <Image src="" alt="logo" width='125' height='50' />
        <div>
          <ul>
            <Link href='/'>
              <a>
                <li className='text-sm ml-10 uppercase hover:border-b '>Home</li>
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar