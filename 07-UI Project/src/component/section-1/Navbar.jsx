import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-16 py-6'>
        <h4 className='bg-black text-white px-6 uppercase py-2 rounded-full'>
            Target Audience
        </h4>
        <button className='bg-gray-200 px-6 py-2 uppercase text-black rounded-full'>
            Digital banking Platform
        </button>
    </div>
  )
}

export default Navbar