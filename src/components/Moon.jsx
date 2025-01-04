import React from 'react'
import earth from "../assets/images/earth.png"
import moon from "../assets/images/moon.png"

const Moon = () => {
    return (
        <div className='min-h-screen flex items-center justify-center overflow-hidden bg-black'>
            <div className='text-[10px] w-[640px] max-md:h-[498px] h-[640px] relative'>
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-md:w-28 max-md:h-28 rounded-full bg-gradient-to-br h-44 w-44 from-[#FA8607] via-[#FCB033] to-[#FA8607] shadow-[0px_0px_22px_2px] shadow-yellow-400'></div>
                <div className='earth absolute border-solid border-white border rounded-full top-14 max-lg:top-28 left-10 max-lg:left-[20%] w-[480px] max-lg:w-96 max-md:w-64 max-md:h-64 max-lg:h-96 h-[480px] max-md:left-[30%] before:absolute max-sm:left-[16%] max-sm:top-[25%]'>
                    <img src={earth} alt="earth" className='h-16 max-md:h-12 absolute top-6 left-7 max-md:top-4 max-md:left-4' />
                    <div className='rounded-full border border-white h-32 w-32 max-md:h-20 max-md:w-20 relative moon'>
                        <img src={moon} alt="moon" className='h-14 max-md:h-12 absolute -top-5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moon