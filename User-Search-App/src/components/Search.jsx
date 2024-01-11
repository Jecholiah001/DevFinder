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
    <div className='p-2 bg-white flex justify-between items-center shadow rounded-lg dark:bg-blueBlack' >
      <div className='flex gap-3 ml-2'>
        <img src={searchIcon} alt='search icon' className='w-[24px] h-[24px]'/>
        <input  value={query} onChange={(e) => setQuery(e.target.value)} className='border-0 outline-none placeholder:text-gray-200 w-[390px] text-[16px] dark:bg-transparent dark:placeholder:text-white' type='text' placeholder='Search Github username...' />
      </div> 
      <div className='flex space-x'>
        <div className='text-red-500 items-center w-20 mt-2 mr-3'>{error}</div>
        <button onClick={handleSubmit} className='px-5 py-2 flex justify-center items-center text-white bg-primaryBlue rounded hover:bg-[#60ABFF] text- [13px] font-medium'>Submit</button>
      </div>
    </div>
  )
}

export default Search 
