/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import moon from '../assets/moon.svg'
import sun from '../assets/Sun.svg'
import { ThemeContext } from '../context/ThemeContextProvider.jsx'

const Header = () => {
    const {theme,themeToggler} = useContext(ThemeContext)
return (
    <div className='w-full flex justify-between items-center'>
        <h1 className='text-secondaryBlack font-bold font-spaceMono text-[26px] dark:text-white'>devfinder</h1>
        <div className='flex items-center justify-center gap-2 cursor-pointer'>
            <h4 className='text-gray-100 font-spaceMono uppercase text-[13px]  hover:text-secondaryBlack dark:text-white  dark:hover:text-[#90A4D4]'> {theme === 'light' ?'Dark': 'Light'} </h4>
            <span onClick={themeToggler}> 
                {theme === 'light' ? <img src={moon} alt='moon icon' className=' transition-transform hover:grayscale hover:brightness-50 hover:contrast-200'/> : <img src={sun} alt='sun icon '/>
                }
            </span>
        </div>
    </div> 
)
}

export default Header
