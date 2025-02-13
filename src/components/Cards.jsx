import React, { useState } from 'react'
import { ToastContainer, toast, Slide } from 'react-toastify';
import ashoka from "../assets/images/ashoka-chakra.png"

const Cards = () => {
    const [name, setName] = useState()
    const [addName, setAddName] = useState('')
    const [fileName, setFileName] = useState('Select Your Image')
    const [images, setImages] = useState()
    const [isSubmitted, setIsSubmitted] = useState(false)

    const changeHandler = (files) => {
        if (files.length > 0) {
            const images = URL.createObjectURL(files[0])
            setImages(images)
            setFileName(files[0].name)
        }
    }

    const handleChange = (e) => {
        e.preventDefault(e);
        toast.success("Your Card Is Ready", {
            style: {
                background: "linear-gradient(90deg, #FF671F, #fff, #046A38)",
                color: "black",
            },
            className: 'custom-toast'
        })
        setName('')
        setAddName(name)
        setFileName('Select Your Image')
        setIsSubmitted(true)
    }

    const handleClick = () => {
        setIsSubmitted(false)
    }
    return (
        <div className='bg-black min-h-screen flex-col flex items-center justify-center py-20 overflow-hidden relative'>
            <img src={ashoka} alt='ashoka' className='bg-flag size-[600px] max-lg:size-[500px] max-sm:size-[350px] ashoka-rotate rounded-full bg-cover absolute z-10 pointer-events-none' />
            <ToastContainer position='top-left' transition={Slide} />
            <h2 className='text-3xl relative z-20 font-bold pb-8 max-w-max mx-auto text-center bg-gradient-to-r from-orange via-white to-green bg-clip-text text-transparent'>Build Your Card For Republic Day</h2>
            {!isSubmitted && (
                <form onSubmit={handleChange} className='border bg-black flex-col flex border-white p-5 rounded-2xl relative z-20'>
                    <input required value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name' className='text-white placeholder:text-white rounded-2xl px-3 py-2 outline-none bg-transparent border border-white' />
                    <input id='image' type="file" hidden onChange={(e) => changeHandler(e.target.files)} required />
                    <label htmlFor="image" className='text-white cursor-pointer border border-white py-2 px-3 rounded-2xl mt-4'>{fileName}</label>
                    <button className='text-black font-semibold bg-gradient-to-br from-orange via-white to-green rounded-2xl max-w-max px-4 py-1 mx-auto mt-4 transition-all duration-300 hover:shadow-[0px_2px_30px_0px] hover:shadow-green'>Submit</button>
                </form>
            )}
            {isSubmitted && (
                <div className='relative z-20'>
                    <div className='border border-white rounded-2xl p-4 max-w-80 backdrop-blur-sm'>
                        <img src={images} alt="my-image" className='size-36 rounded-full mx-auto mb-6 object-cover pointer-events-none' />
                        <p className='max-w-max mx-auto text-center font-bold text-[22px] mb-4 bg-gradient-to-r from-orange via-white to-green bg-clip-text text-transparent uppercase'>{addName}</p>
                        <p className='bg-gradient-to-b text-center from-orange via-white to-green bg-clip-text text-transparent text-lg font-semibold'>Let the constitution give us power, and make us unique, united, and undivided. Let's use the strength of unity to make India unstoppable. Happy Republic Day 2025.</p>
                    </div>
                    <button onClick={handleClick} className='text-black font-semibold rounded-2xl max-w-max px-4 py-1 mx-auto mt-4 flex bg-gradient-to-br from-orange via-white to-green transition-all duration-300 hover:shadow-[0px_2px_30px_0px] hover:shadow-green'>Go Back</button>
                </div>
            )}
        </div>
    )
}

export default Cards