/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import searchIcon from '../assets/Search-icon.svg'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextProvider'
import { useState } from 'react'



const Search = ({getGithubUser, error}) => {
  const {theme} = useContext(ThemeContext)
  const [query, setQuery] = useState('')

  const handleSubmit = () =>{
    if (!query){
      alert ('Field is required')
    }else {
      getGithubUser(query)
      setQuery('')
    }
  }

  return (
    <div className='bg-white flex justify-between items-center shadow rounded-lg dark:bg-blueBlack ml-5 mr-5 p-2 md:m-0' >
      <div className='flex gap-3 ml-2 '>
        <img src={searchIcon} alt='search icon' className=' w-[15px] h-[15px] md:w-[24px] md:h-[24px]'/>
        <input  value={query} onChange={(e) => setQuery(e.target.value)} className='border-0 outline-none placeholder:text-gray-200 md:w-[390px] text-[9px] md:text-[16px] text-black dark:bg-transparent dark:text-white' type='text' placeholder='Search Github username...' />
      </div> 
      <div className='flex space-x'>
        <div className='items-center text-[8px] md:text-[16px] text-red-500 md:w-20 mt-2 mr-3'>{error}</div>
        <button onClick={handleSubmit} className='px-2 py-2 md:px-5 md:py-2 flex justify-center iems-center text-white bg-primaryBlue rounded hover:bg-[#60ABFF] text-[8px] md:text-[16px] font-medium'>Submit</button>
      </div>
    </div>
  )
}

export default Search 
