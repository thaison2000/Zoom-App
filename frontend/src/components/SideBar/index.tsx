import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userProfile } from '../../redux/actions/userAction'
import GroupLinks from './GroupLinks'
import Profile from './Profile'

const SideBar = () => {

  const dispatch = useDispatch<any>()
  useEffect(()=>{
    dispatch(userProfile())
  },[])
  
  return (
    <div className='basis-1/5 drop-shadow-xl p-2 relative z-10'>
        <Profile/>
        <GroupLinks/>
    </div>
  )
}

export default SideBar