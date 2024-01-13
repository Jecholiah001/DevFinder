/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React,  { useContext } from 'react'
import Bitmap from '../assets/Bitmap.svg'
import Location1 from '../assets/location1.svg'
import Twitter1 from '../assets/twitter1.svg'
import Url1 from '../assets/url1.svg'
import Office1 from '../assets/office1.svg'
import Location2 from '../assets/location2.svg'
import Twitter2 from '../assets/twitter2.svg'
import Url2 from '../assets/url2.svg'
import Office2 from '../assets/office2.svg'
import { ThemeContext } from '../context/ThemeContextProvider.jsx'
import moment from 'moment'

const Card = ({githubUser}) => {
  const {theme} = useContext(ThemeContext)

  return (
    <div className='flex flex-col mb-[300px] md:mb-52 lg:mb-96 xl:mb-[500px] ml-5 mr-5 pb-10 md:pb-20 lg:[45%] md:[60%] md:p-6 md:m-0 md:w-full bg-white rounded-lg shadow dark:bg-blueBlack'>

      {/* SECTION A */}
      <div className='flex  lg:gap-5  lg:w-full' >
        <span className=' ml-5 mt-7 mr-4 w-[30%] lg:w-[20%] lg:m-0'>
          {githubUser?.avatar_url ? <img src={githubUser?.avatar_url} alt='bitmap' className='rounded-full'/> : <img src={Bitmap} alt='bitmap' className='rounded-full'/>}
        
        </span>
        <div className='w-full flex flex-col lg:flex-row  lg:gap-2 justify-between items-start'>
          <div className='flex flex-col gap-1'>
            <h1 className=' text-[15px] md:text-[24px] text-primaryBlack font-bold font-spaceMono mt-8 md:mt-12 md:mb-2 lg:m-0 lg:p-0  dark:text-white'> {githubUser?.login=== null ? 'The Octocat': githubUser?.login}</h1>
            <h4 className=' text-[10px] md:text-[14px] text-primaryBlue font-spaceMono mt-2 m-0 p-0'>@{githubUser?.login}</h4>
            </div>
            <h4 className=' text-[10px]  md:text-[13px] text-gray-200 font-spaceMono lg:mt-2 dark:text-white'>
            Joined {moment(githubUser?.created_at).format('D MMM YYYY')}
            </h4>
        </div>
      </div>  

      {/*SECTION B*/}
      <div className=' lg:justify-end flex'>
        <p className='text-gray-100 text-[10px] md:text-[13px] font-spaceMono font-normal w-[80%] mt-10 ml-5 md:ml-7 lg:m-0 dark:text-white '>{githubUser?.bio === null? 'This profile has no bio.': githubUser?.bio}</p>
      </div>

      {/* SECTION C */}
      <div className='flex flex-col gap-4 mt-8 lg:w-[80%] w-full self-end'>

        {/* Middle part */}
        <div className='flex justify-between bg-gray-light ml-5 mr-5 lg:m-0 p-2 md:p-5  lg:p-7 md:ml-7 md:mr-7 rounded-lg dark:bg-tetiaryBlack'>
          <div className='flex flex-col justify-center items-center'>
            <h4 className='text-[11px] md:text-[13px] text-gray-200  dark:text-white'>Repo</h4>
            <p className='font-bold font-spaceMono text-[13px] md:text-[15px] text-primaryBlack  dark:text-white'>{githubUser?.public_repos === null ? '0' : githubUser?.public_repos }</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h4 className='text-[11px] md:text-[13px] text-gray-200  dark:text-white'>Following</h4>
            <p className='font-bold font-spaceMono text-[13px] md:text-[15px] text-primaryBlack  dark:text-white'>{githubUser?.following === null ? '0': githubUser?.following }</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h4 className=' text-[11px] md:text-[13px] text-gray-200  dark:text-white'>Followers</h4>
            <p className='font-bold font-spaceMono text-[13px] md:text-[15px] text-primaryBlack dark:text-white'>{githubUser?.followers === null ? '0': githubUser?.followers}</p>
          </div>
        </div>

        {/* Last part */}
        <div className='font-spaceMono grid md:grid-cols-2 gap-6 grid-cols-1 mt-5 pl-7 md:pl-9 lg:pl-2'>
          <div className='flex gap-2 items-center'>
            <span>{theme === 'light' ? <img src={Location1} alt='location icon'/>:  <img src={Location2} alt='location icon'/>}</span>
            <p className='text-gray-200 text-bold font-spaceMono text-[11px]  md:text-[13px] dark:text-white '>{githubUser?.location === null ? 'Not Available': githubUser?.location}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <span> {theme === 'light' ? <img src={Twitter1} alt='twitter icon'/>:<img src={Twitter2} alt='twitter icon'/>} </span>
            <p className='text-gray-100 text-bold font-spaceMono text-[11px] md:text-[13px]  dark:text-white'>{githubUser?.twitter_username === null ? 'Not Available': githubUser?.twitter_username}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <span> {theme === 'light' ? <img src={Url1} alt='url icon'/>:<img src={Url2} alt='url icon'/>}</span>
            <p className='text-gray-100 text-bold font-spaceMono text-[11px]  md:text-[13px]  dark:text-white hover:underline'> {githubUser?.blog === null ? 'Not Available': githubUser?.blog}</p>
          </div>
          <div className='flex gap-2 items-center'>
            <span> {theme === 'light' ? <img src={Office1} alt='office building icon'/>:<img src={Office2} alt='office building icon'/>}</span>
            <p className='text-gray-100 text-bold font-spaceMono text-[11px]  md:text-[13px]  dark:text-white'>{githubUser?.company === null ? 'Not Available': githubUser?.company}</p>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Card


