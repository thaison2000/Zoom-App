import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='flex flex-row'>
      <div className='basis-1/3'></div>
      <div className='basis-1/3 '>
        <div className='basis-1/3 flex flex-col p-4'>
          <div className='mt-[15%]'></div>
          <div className='drop-shadow-xl rounded-2xl bg-white'>
            <h1 className='p-4 text-center text-2xl bg-gray-100 rounded-t-2xl font-semibold'>Zoom App</h1>
            <div className='px-auto'>
              <input type="text" className='w-5/6 p-4 m-4 ml-8 rounded-full focus:outline-none' placeholder='email ...' />
            </div>
            <div>
              <input type="text" className='w-5/6 p-4 m-4 ml-8 rounded-full focus:outline-none' placeholder='username ...' />
            </div>
            <div>
              <input type="text" className='w-5/6 p-4 m-4 ml-8 rounded-full focus:outline-none' placeholder='password ...' />
            </div>
            <div>
              <input type="text" className='w-5/6 p-4 m-4 ml-8 rounded-full focus:outline-none' placeholder='password again ...' />
            </div>
            <div>
              <h3 className='text-center m-auto'>
                Do you have an account?
                <Link to='/login' className='text-gray-400 font-bold'> Login Now</Link>
              </h3>
            </div>
            <div>
              <div className='m-auto w-24 h-12 bg-gray-100 text-center text-xl font-medium p-2 rounded-2xl my-4 hover:pointer-events-none'>Register</div>
            </div>
          </div>
        </div>
      </div>
      <div className='basis-1/3'></div>
    </div>
  )
}

export default Register