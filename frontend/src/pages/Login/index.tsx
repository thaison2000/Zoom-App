import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setPassword(e.target.value)
  }

  return (
    <div className='flex flex-row'>
      <div className='basis-1/3'></div>
      <div className='basis-1/3 '>
        <div className='basis-1/3 flex flex-col p-4'>
          <div className='mt-[30%]'></div>
          <div className='drop-shadow-xl rounded-2xl bg-white'>
            <h1 className='p-4 text-center text-2xl bg-gray-100 rounded-t-2xl font-semibold'>Zoom App</h1>
            <div className='px-auto'>
              <input type="text" className='w-5/6 p-4 m-4 ml-8 rounded-full focus:outline-none' placeholder='email ...' onChange={handleEmailChange} value={email}/>
            </div>
            <div>
              <input type="text" className='w-5/6 p-4 m-4 ml-8 rounded-full focus:outline-none' placeholder='password ...' onChange={handlePasswordChange} value={password}/>
            </div>
            <div>
              <h3 className='text-center m-auto'>
                Do you have an account?
                <Link to='/register' className='text-gray-400 font-bold'> Register Now</Link>
              </h3>
            </div>
            <div>
              <div className='m-auto w-24 h-12 bg-gray-100 text-center text-xl font-medium p-2 rounded-2xl my-4 hover:pointer-events-none'>Login</div>
            </div>
          </div>
        </div>
      </div>
      <div className='basis-1/3'></div>
    </div>
  )
}

export default Login