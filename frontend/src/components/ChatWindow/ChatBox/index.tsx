import React from 'react'
import MessageBox from '../MessageBox'

const ChatBox = () => {
    return (
        <div className='w-8/10 h-[84vh] m-2 bg-white relative'>
            <div className='flex flex-col overflow-auto h-[75vh]'>
                <MessageBox/>
                <MessageBox/>
                <MessageBox/>
                <MessageBox/>
                <MessageBox/>
                <MessageBox/>
                <MessageBox/>
            </div>
            <div className='flex flex-row justify-center items-center absolute bottom-0'>
                <svg className="w-6 h-6 ml-4" fill="currentColor" color='blue' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z" /><path d="M9 13h2v5a1 1 0 11-2 0v-5z" /></svg>
                <svg className="w-6 h-6 ml-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /></svg>
                <input type="text" placeholder='Input ...' className='p-4 w-[1000px] rounded-2xl ml-4' />
                <svg className="w-6 h-6 ml-4" fill="currentColor" color='green' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /><path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>                </div>
                
        </div>
    )
}

export default ChatBox