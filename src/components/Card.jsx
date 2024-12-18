import React from 'react'
import { CARD_LIST } from '../utils/helper'
import { useNavigate } from 'react-router-dom'
const Card = () => {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/card/${id}`);
    };
    return (
        <div className='py-12'>
            <div className='max-w-6xl px-4 mx-auto'>
                <div className='flex flex-wrap -mx-3'>
                    {CARD_LIST.map((obj, i) => (
                        <div className='w-1/3 px-3 '>
                            <div onClick={() => handleClick(obj.id)} className='border border-black rounded-lg p-3 cursor-pointer'>
                                <h1 className='text-3xl font-semibold'>{obj.title}</h1>
                                <p className='text-lg leading-6 pt-2'>{obj.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card