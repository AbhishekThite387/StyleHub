import React from 'react'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between' >
      <p className='text-xl font-semibold tracking-wide text-gray-800'>Style<span className='text-pink-400'>Hub</span> <span className='text-sm font-normal text-gray-500'>Admin</span></p>
      <button onClick={() => setToken('') } className='bg-gray-600 hover:bg-gray-700 transition-colors text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm' >Logout</button>
    </div>
  )
}

export default Navbar
