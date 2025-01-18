import React from 'react'
import logo from "../assets/images/book-logo.png"

const Book = () => {
  const year = new Date().getFullYear()
  return (
    <div className='bg-black min-h-screen flex pl-44 items-center justify-center font-macondo'>
      <div className='book flex items-center flex-col px-3 group justify-center text-center relative w-[260px] h-[350px] max-sm:w-[175px] max-sm:h-[275px] rounded-xl bg-[#effffe] shadow-[1px_1px_12px] shadow-[#000] cursor-pointer'>
        <p className='absolute top-3 right-3 text-xs'>Date : ../../{year}</p>
        <p className='absolute bottom-3 text-xs'>(1)</p>
        <p className='text-black text-lg font-bold leading-5 max-sm:text-base max-sm:leading-4'>To become a Front End Developer you need these skills</p>
        <ul className='px-5 text-base max-sm:text-xs font-medium list-decimal text-left pt-8 max-sm:pt-6'>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>TESTING AND DEBUGGING</li>
          <li>FRAMEWORKS AND LIBRARIES</li>
        </ul>
        <div className='cover px-4 group-hover:transition-all duration-300 absolute rounded-xl top-0 w-full h-full bg-cover items-center justify-center shadow-[1px_1px_12px] shadow-[#000] flex flex-col origin-left overflow-hidden bg-gradient-to-br from-blue-400 to-yellow-200'>
          <img src={logo} alt="book-logo" className='h-16' />
          <h1 className='font-bold text-3xl max-sm:text-[22px] max-sm:leading-6'>FRONT END DEVELOPMENT</h1>
        <p className='pt-12'>Designed by : Deepak Verma</p></div>
      </div>
    </div>
  )
}

export default Book