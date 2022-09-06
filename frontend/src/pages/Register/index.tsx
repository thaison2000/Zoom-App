import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { userRegister } from '../../redux/actions/userAction'

const Register = () => {

  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [againPassword, setAgainPassword] = useState('')

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleAgainPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgainPassword(e.target.value)
  }

  const { error, success } = useSelector(
    (state: any) => state.user
  )
  const dispatch = useDispatch<any>()

  const navigate = useNavigate()

  useEffect(() => {
    if (success) {
      navigate('/')
    }
  }, [success, error])

  const handleRegister = () => {
    // check if passwords not match
    if (password !== againPassword) {
      alert('Password does not match !')
      return
    }

    dispatch(userRegister({
      username: username,
      email: email,
      password: password,
      againPassword: againPassword
    }))
  }

  return (
    <div className='flex flex-row'>
      <div className='basis-1/3'></div>
      <div className='basis-1/3 '>
        <div className='basis-1/3 flex flex-col p-4'>
          <div className='mt-[15%]'></div>
          <div className='drop-shadow-xl rounded-2xl bg-white'>
            <h1 className='p-4 text-center text-2xl bg-gray-100 rounded-t-2xl font-semibold'>Zoom App</h1>
            <div className='px-auto'>
              <input
                type="text"
                className='w-5/6 p-4 m-4 ml-8 rounded-full focus:outline-none'
                placeholder='email ...'
                value={email}
                onChange={handleEmailChange} />
            </div>
            <div>
              <input
                type="text"
                className='w-5/6 p-4 m-4 ml-8 rounded-full focus:outline-none'
                placeholder='username ...'
                value={username}
                onChange={handleUserNameChange} />
            </div>
            <div>
              <input
                type="text"
                className='w-5/6 p-4 m-4 ml-8 rounded-full focus:outline-none'
                placeholder='password ...'
                value={password}
                onChange={handlePasswordChange} />
            </div>
            <div>
              <input
                type="text"
                className='w-5/6 p-4 m-4 ml-8 rounded-full focus:outline-none'
                placeholder='password again ...'
                value={againPassword}
                onChange={handleAgainPasswordChange} />
            </div>
            <div>
              <h3 className='text-center m-auto'>
                Do you have an account?
                <Link to='/login' className='text-gray-400 font-bold'> Login Now</Link>
              </h3>
            </div>
            <div>
              <div
                onClick={handleRegister}
                className='m-auto w-24 h-12 bg-gray-100 text-center text-xl font-medium p-2 rounded-2xl my-4'>Register</div>
            </div>
          </div>
        </div>
      </div>
      <div className='basis-1/3'></div>
    </div>
  )
}

export default Register