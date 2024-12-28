import React, { useState } from 'react'
import file from "../assets/images/file.png"
import home from "../assets/images/home.png"
import about from "../assets/images/about.svg"
import setting from "../assets/images/setting.png"
import logout from "../assets/images/log-out.png"
import { NavLink } from 'react-router-dom'

const MenuIcon = () => {
    const [open, setOpen] = useState()
    return (
        <div className='bg-black min-h-screen pt-4'>
            <div className='max-w-[1440px] w-full mx-auto relative'>
                <h1 className='text-white text-5xl font-semibold text-center pb-10 max-sm:text-4xl'>MENU</h1>
                <div className='absolute left-0'>
                    <img onClick={() => setOpen(!open)} src={file} alt="file" className={`h-32 max-md:h-28 max-sm:h-16 transition-all duration-300 cursor-pointer relative z-10 ${open ? "rotate-90" : ""} `} />
                    <p className='text-white text-center text-xl max-sm:text-base'>MENU</p>
                </div>
                <NavLink to="/button" onClick={() => setOpen(false)} href='home' className={`${open ? "left-40  max-md:left-32 max-sm:left-20 " : "left-0 opacity-0 "} absolute transition-all duration-500 text-white text-center max-sm:text-xs group`}>
                    <img src={home} alt="home" className='h-28 max-md:h-24 max-sm:h-12 group-hover:scale-105 transition-all duration-300' /> Home
                </NavLink>
                <NavLink to="/button" onClick={() => setOpen(false)} href='about' className={`${open ? "left-80 max-md:left-64 max-sm:left-40 " : "left-0 opacity-0 "} absolute transition-all duration-500 group text-white text-center max-sm:text-xs`}>
                    <img src={about} alt="about" className='h-28 max-md:h-24 max-sm:h-12 group-hover:scale-105 transition-all duration-300' /> About
                </NavLink>
                <NavLink to="/button" onClick={() => setOpen(false)} href='setting' className={`${open ? "left-[480px] max-md:left-96 max-sm:left-60 " : "left-0 opacity-0 "} absolute transition-all duration-500 text-white text-center max-sm:text-xs group`}>
                    <img src={setting} alt="setting" className='h-28 max-md:h-24 max-sm:h-12 group-hover:rotate-180 transition-all duration-500' /> Settings
                </NavLink>
                <NavLink to="/button" onClick={() => setOpen(false)} href='log-out' className={`${open ? "left-[640px] max-md:left-[512px] max-sm:left-80 " : "left-0 opacity-0 "} absolute transition-all duration-500 group text-white text-center max-sm:text-xs`}>
                    <img src={logout} alt="logout" className='h-28 max-md:h-24 max-sm:h-12 group-hover:rotate-90 transition-all duration-300' /> Logout
                </NavLink>
            </div>
        </div>
    )
}

export default MenuIcon