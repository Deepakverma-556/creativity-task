import React from 'react'
import { MEDIA_LIST } from '../utils/helper'

const ReflectIcons = () => {
    return (
        <div className='flex items-center justify-center min-h-screen py-4 bg-black'>
            <div className='max-w-5xl mx-auto px-4 reflection'>
                <h1 className='text-white text-center text-4xl font-semibold pb-16 max-sm:text-[33px]'>REFLECTION OF ICONS</h1>
                <div className='flex items-center gap-5'>
                    {MEDIA_LIST.map((obj, i) => (
                        <a target='blank' key={i} href={obj.link} className='rounded-lg max-sm:w-16 max-sm:h-16 w-[100px] h-[100px] flex justify-center items-center transition-all duration-300 hover:bg-red-600 hover:shadow-[0px_0px_33px_4px] hover:shadow-red-600'>
                            {obj.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ReflectIcons