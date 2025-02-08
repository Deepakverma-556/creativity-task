import React, { useState } from 'react'
import { INCREASE_IMAGES_LIST } from '../utils/helper'

const IncreaseCards = () => {
    const [open, setOpen] = useState()
    return (
        <div className='flex items-center justify-center bg-black h-screen'>
            <div onClick={()=>setOpen(false)} className='fixed w-full h-full z-10'></div>
            <div className='max-w-6xl mx-auto px-4'>
                <h2 className='text-center z-20 relative text-white max-sm:text-2xl text-3xl pb-8 font-semibold'>Click On The Image</h2>
                <div className='flex gap-3 justify-center'>
                    {INCREASE_IMAGES_LIST.map((obj, i) => (
                        <img onClick={() => setOpen(open === i ? null : i)} key={i} src={obj.image} alt={obj.imageAlt} className={`object-cover z-20 h-64 max-sm:h-40 rounded-3xl transition-all duration-300 cursor-pointer ${open === i ? "w-96 max-sm:w-56" : "w-8 max-sm:w-4"}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default IncreaseCards