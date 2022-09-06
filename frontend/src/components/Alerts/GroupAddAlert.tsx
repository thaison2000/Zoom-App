import React from 'react'

const GroupAddAlert = () => {
  return (
    <div className='w-[30vw] h-[30vh] fixed top-[25vh] left-[35vw] bg-white z-20 rounded-2xl drop-shadow-2xl'>
        <h1 className='mx-8 mt-8 font-medium'>Group Name:</h1>
        <input type="text" className=' m-8 p-4 w-[80%] rounded-2xl' placeholder='name ...'/>
    </div>
  )
}

export default GroupAddAlert