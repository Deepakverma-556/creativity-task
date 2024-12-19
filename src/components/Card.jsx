import React from 'react'
import { CARD_LIST } from '../utils/helper'
import { NavLink } from 'react-router-dom'
const Card = () => {
    return (
        <div className='py-12'>
            <div className='max-w-6xl px-4 mx-auto'>
                <div className='flex flex-wrap -mx-3'>
                    {CARD_LIST.map((obj, i) => (
                        <div key={i} className='w-1/3 px-3 '>
                            <NavLink to={`/card/?${obj.id}`} >
                                <div className='border border-black rounded-lg p-3 cursor-pointer'>
                                    <h1 className='text-3xl font-semibold'>{obj.title}</h1>
                                    <p className='text-lg leading-6 pt-2'>{obj.description}</p>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Card