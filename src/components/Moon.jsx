import React from 'react'

const Moon = () => {
    return (
        <div className='md:min-h-screen flex items-center justify-center overflow-hidden bg-black'>
            <div className='text-[10px] w-[640px] max-md:h-[498px] h-[640px] relative'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 max-md:w-28 max-md:h-28 rounded-full bg-yellow-500 shadow-[0px_0px_3px]'></div>
                <div className='earth absolute border-solid border-white border rounded-full top-10 max-lg:top-28 left-10 max-lg:left-[20%]  w-[480px] max-lg:w-96 max-md:w-64 max-md:h-64 max-lg:h-96 h-[480px] max-md:left-[30%] before:absolute max-sm:left-[16%] max-sm:top-[25%] before:rounded-full before:top-11 max-md:before:top-[13%] before:right-[44.8px] max-md:before:right-[7%] before:h-12 before:w-12 max-md:before:w-10 max-md:before:h-10 before:bg-[#00ffff]'>
                    <div className='moon absolute border-solid border-white border rounded-full top-0 max-md:top-4 right-0 max-md:w-20 max-md:h-20 w-32 h-32 before:absolute before:rounded-full before:top-3 before:right-[3px] before:w-5 before:h-5 max-md:before:top-[4%] max-md:before:w-5 max-md:before:h-5 before:bg-[#c0c0c0]'></div>
                </div>
            </div>
        </div>
    )
}

export default Moon