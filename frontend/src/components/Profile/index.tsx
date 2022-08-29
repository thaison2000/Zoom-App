import React from 'react'

const Profile = () => {
  return (
    <div className='w-full h-2/5 bg-white flex flex-col justify-between p-2 rounded-2xl '>
        <div className='flex flex row justify-center items-start relative mt-4'>
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='w-32 h-32 rounded-full'/>
        <svg className="w-6 h-6 absolute bottom-[16px] left-[170px]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>        </div>
        <div>
            <h3 className=''>Name: Thai son</h3>
            <h3 className=''>Email: son.dt1408@gmail.com</h3>
        </div>
    </div>
  )
}

export default Profile