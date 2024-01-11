/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react'  
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Search from './components/Search'
import axios from 'axios'

function App() {
  const [githubUser, setGithubUser] = useState(null)
  const [loading, setLoading]= useState(false)
  const [error,setError] = useState(null)

  const getGithubUser = async (githubUser) =>{
    try {
      setLoading(true)
      const response = await axios.get(`https://api.github.com/users/${githubUser}`, {
        headers: {
          Authorization:`Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`
        }
      })

      const data = await response.data
      console.log(data)
      setLoading(false)
      setGithubUser(data)

    } catch (error) {
        console.log(error)
        setError('No Results',error)
      }
}


  return (
  
    <div className='w-100 h-screen bg-gray-light dark:bg-tetiaryBlack ' >
      <div className='w:[90%] md:w-[60%] lg:w-[45%] m-auto pt-[10rem] flex flex-col gap-5 overflow-hidden'>
        <Header/>
        <Search getGithubUser ={getGithubUser} error={error}/>
        <Card githubUser= {githubUser}/>
      </div>
    </div>
    
  )
}

export default App
