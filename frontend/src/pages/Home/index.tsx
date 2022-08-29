import React from 'react'
import ChatWindow from '../../components/ChatWindow'
import SideBar from '../../components/SideBar'

const Home = () => {
  return (
    <div className='flex flex-row w-full h-full bg-gray-100'>
        <SideBar/>
        <ChatWindow/>
    </div>
  )
}

export default Home