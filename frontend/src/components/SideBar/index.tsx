import React from 'react'
import GroupLinks from '../GroupLinks'
import Profile from '../Profile'

const SideBar = () => {
  return (
    <div className='basis-1/5 drop-shadow-xl p-2 '>
        <Profile/>
        <GroupLinks/>
    </div>
  )
}

export default SideBar