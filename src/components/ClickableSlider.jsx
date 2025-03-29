import React, { useState } from 'react'
import coca from "../assets/images/coca-cola.png"

const ClickableSlider = () => {
    const [open, setOpen] = useState()
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='max-w-6xl mx-auto px-4'>
                <div className='relative flex items-center justify-center h-full'>
                    <img onClick={() => setOpen(!open)} src={coca} alt="coca" className='h-52' />
                    <div className={`${open ? "w-20" : "w-0"} border-t-2 transition-all duration-300 origin-left border-black absolute top-3`}></div>
                </div>
            </div>
        </div>
    )
}

export default ClickableSlider