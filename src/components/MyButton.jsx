import React from 'react'

const MyButton = () => {
    return (
        <div className='bg-black min-h-screen flex items-center justify-center'>
            <div className='mx-auto flex flex-col gap-6'>
                <div className='h-20 w-20 rounded-full relative group'>
                    <div className='absolute rounded-full h-20 w-20 bg-green-700 transition-all duration-500 origin-left group-hover:-translate-x-32 '>
                    </div>
                    <button className='rounded-full h-20 w-20 bg-white'></button>
                </div>
                <div className='h-20 w-20 rounded-full relative group'>
                    <div className='absolute rounded-full h-20 w-20 bg-green-700 transition-all duration-500 origin-left group-hover:rotate-180 '>
                    </div>
                    <button className='rounded-full h-20 w-20 bg-white'></button>
                </div>
                <div className='h-20 w-20 rounded-full relative'>
                    <div className='absolute rounded-full h-20 w-20 bg-green-700 transition-all duration-500 origin-left hover:rotate-180 '>
                    </div>
                    <button className='rounded-full h-20 w-20 bg-white'></button>
                </div>
                <div className='h-20 w-20 rounded-full relative'>
                    <div className='absolute rounded-full h-20 w-20 bg-green-700 transition-all duration-500 origin-left hover:rotate-180 '>
                    </div>
                    <button className='rounded-full h-20 w-20 bg-white'></button>
                </div>
            </div>
        </div>
    )
}

export default MyButton