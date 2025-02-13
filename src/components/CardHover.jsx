import React from 'react'
import { CARD_HOVER_LIST } from '../utils/helper'

const CardHover = () => {
    return (
        <div className='flex flex-col gap-5 items-center justify-center min-h-screen bg-black py-10'>
            <h2 className='text-white font-bold text-4xl pb-6'>Hover On Card</h2>
            <div className='flex gap-5 items-center px-4 flex-wrap justify-center'>
                {CARD_HOVER_LIST.map((obj, i) => (
                    <div key={i} className='bg-cover w-48 h-64 border relative border-white overflow-hidden group rounded-lg cursor-pointer hover:bg-opacity-15'>
                        <img src={obj.image} alt={obj.imageAlt} className='w-full h-full object-cover group-hover:opacity-20' />
                        <div className='absolute z-20 h-[0.5px] bottom-8 -left-full group-hover:-left-[85px] w-full bg-white transition-all duration-300'></div>
                        <div className='absolute z-20 h-full left-2 -top-full w-[0.5px] bg-white group-hover:-top-10 transition-all duration-300'></div>
                        <div className='absolute z-20 h-full left-28 -bottom-full group-hover:-bottom-[190px] w-[0.5px] bg-white transition-all duration-300'></div>
                        <div className='absolute z-20 w-full bottom-[73px] h-[0.5px] -right-full group-hover:-right-4 bg-white transition-all duration-300'></div>
                        <p className='absolute text-xs z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white font-semibold left-4 bottom-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corporis,</p>
                        <button className='absolute left-3 z-20 bottom-9 bg-purple-700 hover:shadow-[0px_0px_40px_2px] shadow-purple-700 opacity-0 group-hover:opacity-100 transition-all duration-300 text-white rounded-md px-3 py-1'>Download</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CardHover