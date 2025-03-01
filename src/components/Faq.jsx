import React, { useState } from 'react'
import { FAQ_LIST } from '../utils/helper'

const Faq = () => {
    const [active, setActive] = useState()

    const handleClick = (i) => {
        setActive(active === i ? "" : i)
    }
    return (
        <div className='mx-auto flex items-center flex-col'>
            {FAQ_LIST.map((obj, i) => (
                <div key={i} onClick={() => handleClick(i)} className='max-w-96 mx-auto bg-black rounded-lg overflow-hidden  mb-3'>
                    <div className='cursor-pointer px-2 flex items-center justify-between'>
                        <h2 className=' py-3  text-2xl font-semibold text-white'>{obj.title}</h2>
                        <svg className={` transition-all duration-500 ${active === i ? "rotate-180 origin-center" : ""}`} width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.251783 0.275993C0.331584 0.188494 0.426328 0.119084 0.530606 0.0717287C0.634883 0.0243731 0.746652 4.93218e-08 0.859523 5.91893e-08C0.972396 6.9057e-08 1.08416 0.0243731 1.18844 0.0717288C1.29272 0.119084 1.38746 0.188494 1.46727 0.275993L11 10.7255L20.5328 0.275995C20.6126 0.188511 20.7073 0.119114 20.8116 0.0717677C20.9159 0.0244216 21.0277 5.33208e-05 21.1405 5.33306e-05C21.2534 5.33405e-05 21.3652 0.0244216 21.4694 0.0717678C21.5737 0.119114 21.6685 0.188511 21.7483 0.275995C21.8281 0.36348 21.8914 0.46734 21.9346 0.581645C21.9778 0.695949 22 0.818459 22 0.942181C22 1.0659 21.9778 1.18841 21.9346 1.30272C21.8914 1.41702 21.8281 1.52088 21.7483 1.60837L11.6078 12.724C11.528 12.8115 11.4332 12.8809 11.3289 12.9283C11.2247 12.9756 11.1129 13 11 13C10.8871 13 10.7754 12.9756 10.6711 12.9283C10.5668 12.8809 10.4721 12.8115 10.3923 12.724L0.251782 1.60836C0.171958 1.52089 0.108636 1.41703 0.0654345 1.30272C0.0222331 1.18842 -8.64037e-07 1.06591 -8.53221e-07 0.942179C-8.42404e-07 0.818452 0.0222331 0.695938 0.0654346 0.581633C0.108636 0.467327 0.171958 0.36347 0.251783 0.275993Z" fill="white" />
                        </svg>
                    </div>
                    <p className={`text-white px-2 pb-3 transition-all duration-500 ease-linear ${active === i ? "h-[150px]" : "h-0 opacity-0 "} `}>{obj.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Faq