import React from 'react'
import { Instagram } from '../utils/icons'

const Cards = () => {
    return (
        <div className='flex items-center justify-center min-h-screen py-4 bg-black'>
            <div className='max-w-5xl mx-auto px-4 reflection'>
                <a href="#" className='mx-[10px] rounded-full box-border bg-white w-[100px] h-[100px] flex justify-center items-center transition-all duration-200 text-[40px]'>
                    <Instagram/>
               </a>
                {/* <Instagram myClass='reflection-text transition-all duration-300 cursor-pointer hover:shadow-[0px_0px_2px_2px] hover:shadow-red-400 rounded-md' />
          
                <h2 class="reflection-text text-3xl transition-all duration-300 text-white relative after:absolute after:content-['Hello_My_Name_Is_Deepak'] after:bottom-1 after:left-0 after:text-white after:opacity-30 after:origin-bottom ">Hello My Name Is Deepak</h2> */}
            </div>
        </div>
    )
}

export default Cards