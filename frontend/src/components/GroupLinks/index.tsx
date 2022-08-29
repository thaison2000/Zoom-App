import React from 'react'

const GroupLinks = () => {
  return (
    <div className='flex flex-col justify-center mt-4 rounded-2xl bg-white'>
        <div>
            <input type="text" placeholder='seach ...' className='p-4 w-full focus:outline-0 rounded-2xl'/>
        </div>
        <div className='p-4  hover:bg-gray-200 rounded-2xl'>
            <span>group 1</span>
        </div>
        <div className='p-4  hover:bg-gray-200 rounded-2xl'>
            <span>group 1</span>
        </div>
        <div className='p-4  hover:bg-gray-200 rounded-2xl'>
            <span>group 1</span>
        </div>
        <div className='p-4  hover:bg-gray-400 rounded-2xl'>
            <span>group 1</span>
        </div>
        <div className='p-4  hover:bg-gray-400 rounded-2xl'>
            <span>group 1</span>
        </div>
        <div className='p-4  hover:bg-gray-400 rounded-2xl'>
            <span>group 1</span>
        </div>
    </div>
  )
}

export default GroupLinks