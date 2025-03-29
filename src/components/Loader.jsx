import React from 'react'

const Loader = () => {
  return (
      <div className='flex flex-col items-center justify-center min-h-screen bg-black'>
          <h2 className='text-white pb-20 font-bold text-5xl'>LOADER</h2>
          <div className='relative w-40 h-40'>
              <span className='absolute w-full h-full rounded-[50%] backdrop-blur-md bg-black/25 span-circle border-white border'></span>
              <span className='absolute w-full h-full rounded-[50%] bg-pink-600 pink-circle'></span>
              <span className='absolute w-full h-full rounded-0 bg-white white-box'></span>
          </div>
    </div>
  )
}

export default Loader