import React from 'react'

export const TextAnimation = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-black'>
            <div className="box flex">
                <div className="child-box w-[400px] max-md:w-[310px] max-md:text-5xl max-sm:w-[180px] h-[200px] max-sm:h-32 text-6xl max-sm:text-3xl font-bold whitespace-nowrap overflow-hidden bg-red-500 text-yellow-300 origin-right">
                    <span className='absolute -left-full'>Hello World</span>
                    <span className='flex absolute -left-full span-text pt-20 text-2xl max-sm:text-base text-green'>This is 3D text animation</span>
                </div>
                <div className="child-box w-[400px] max-md:w-[310px] max-md:text-5xl max-sm:w-[180px] h-[200px] max-sm:h-32 text-6xl max-sm:text-3xl font-bold whitespace-nowrap overflow-hidden bg-white text-black origin-left">
                    <span className='absolute'>Hello World</span>
                    <span className='flex absolute span-text pt-20 text-2xl max-sm:text-base'>This is 3D text animation</span>
                </div>
            </div>
        </div>
    )
}
