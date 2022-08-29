import React from 'react'

const MessageBox = () => {
    return (
        <div className='flex flex-row m-4'>
            <img className=' w-8 h-8 rounded-full' src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            <div className='p-4 pl-8 m-2 bg-gray-200 rounded-full w-fit max-w-[50%]'>
                <span className='w-fit'>
                    hello
                </span>
            </div>
        </div>
    )
}

export default MessageBox