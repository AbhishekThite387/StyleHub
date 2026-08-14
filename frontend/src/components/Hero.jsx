import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-200 rounded-md overflow-hidden bg-[#fafafa]'>

      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center px-8 py-14 sm:py-0'>
        <div className='text-[#414141] max-w-md'>

          {/* Small Heading */}
          <div className='flex items-center gap-2 mb-5'>
            <p className='w-10 h-[2px] bg-pink-400'></p>
            <p className='font-medium text-sm tracking-widest text-gray-600'>
              NEW SEASON '26
            </p>
          </div>

          {/* Main Heading */}
          <h1 className='prata-regular text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5'>
            Style That
            <br />
            <span className='text-pink-400'>Speaks.</span>
          </h1>

          {/* Description */}
          <p className='text-gray-500 text-sm md:text-base leading-7 max-w-sm mb-8'>
            Discover thoughtfully selected styles designed
            to make every everyday look feel effortless.
          </p>

          {/* Button */}
          <div className='flex items-center gap-3 cursor-pointer group w-fit'>
            <button className='bg-[#222] text-white px-6 py-3 text-sm font-medium tracking-wide rounded-sm group-hover:bg-pink-400 transition-all duration-300'>
              EXPLORE COLLECTION
            </button>

            <span className='w-10 h-[1px] bg-pink-400 group-hover:w-14 transition-all duration-300'></span>
          </div>

        </div>
      </div>


      {/* Hero Right Side */}
      <div className='w-full sm:w-1/2 overflow-hidden'>
        <img
          className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
          src={assets.hero_img}
          alt='Latest fashion collection'
        />
      </div>

    </div>
  )
}

export default Hero