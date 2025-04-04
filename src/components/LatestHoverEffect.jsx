import React from 'react'

const LatestHoverEffect = () => {
  return (
      <div className='min-h-screen flex flex-col items-center justify-center bg-black'>
          <h2 className='text-white text-4xl font-bold pb-28'>Menu Hover Effect</h2>
          <ul className='relative parent-ul'>
              <li style={{"--i":6}} className='list relative w-[200px] max-sm:w-44 cursor-pointer list-none p-[15px] hover:bg-sky-600 hover:-translate-x-[50px] '><a href="#" className='text-gray-400 block uppercase'>About</a></li>
              <li style={{"--i":5}} className='list relative w-[200px] max-sm:w-44 cursor-pointer list-none p-[15px] hover:bg-sky-600 hover:-translate-x-[50px] '><a href="#" className='text-gray-400 block uppercase'>Services</a></li>
              <li style={{"--i":4}} className='list relative w-[200px] max-sm:w-44 cursor-pointer list-none p-[15px] hover:bg-sky-600 hover:-translate-x-[50px] '><a href="#" className='text-gray-400 block uppercase'>Home</a></li>
              <li style={{"--i":3}} className='list relative w-[200px] max-sm:w-44 cursor-pointer list-none p-[15px] hover:bg-sky-600 hover:-translate-x-[50px] '><a href="#" className='text-gray-400 block uppercase'>Portfolio</a></li>
              <li style={{"--i":2}} className='list relative w-[200px] max-sm:w-44 cursor-pointer list-none p-[15px] hover:bg-sky-600 hover:-translate-x-[50px] '><a href="#" className='text-gray-400 block uppercase'>Our Team</a></li>
              <li style={{"--i":1}} className='list relative w-[200px] max-sm:w-44 cursor-pointer list-none p-[15px] hover:bg-sky-600 hover:-translate-x-[50px] '><a href="#" className='text-gray-400 block uppercase'>Contact</a></li>
          </ul>
    </div>
  )
}

export default LatestHoverEffect