import React, { useState } from 'react'

const users = [
    {
        id: 1,
        username: 'user1'
    },
    {
        id: 2,
        username: 'user2'
    }, 
    {
        id: 3,
        username: 'user3'
    },
    {
        id: 4,
        username: 'user4'
    }
]

const PeopleAddAlert = () => {

    const [peopleAdd, setPeopleAdd] = useState(false)

    const handlePeopleAddClick = () => {
        setPeopleAdd(true)
    }
    return (
        <div className='w-[30vw] h-[40vh] fixed top-[25vh] left-[35vw] bg-white z-20 rounded-2xl drop-shadow-2xl'>
            <h1 className='mx-8 mt-8 font-medium'>
                Add Member
            </h1>
            <input type="text" className=' m-8 p-4 w-[80%] rounded-2xl' placeholder='name ...' />
            <div>
                <div className='flex flex-row align-center'>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" className='w-12 h-12 rounded-full ml-8' />
                    <h1 className='ml-4 mt-2 font-medium text-xl'>user 1</h1>
                    {peopleAdd ?
                        <div
                            className=' bg-green-500 p-2 rounded-xl text-white absolute right-8' >
                            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                            </svg>
                        </div> :
                        <div
                            onClick={handlePeopleAddClick}
                            className=' bg-red-500 p-[10px] rounded-xl text-white absolute right-8' >
                            Add
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default PeopleAddAlert