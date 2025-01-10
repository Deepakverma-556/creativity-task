import React, { useState } from 'react'

const Dummy = () => {
    const [open, setOpen] = useState()
    const changeHandler = (type) => {
        const images = URL.createObjectURL(type[0])
        setOpen(images)
    }
    return (
        <div className='py-6'>
            <label htmlFor="menu" className='p-5 border-2 cursor-pointer border-black rounded-xl'>Browse</label>
            <input multiple accept='image/*' id='menu' onChange={(e) => changeHandler(e.target.files)} type="file" hidden />
            <div className='mt-8 flex w-full max-w-96 gap-6'>
                <img src={open} alt="my-image" className='h-20 w-20 object-cover' />
            </div>
        </div>
    )
}

export default Dummy