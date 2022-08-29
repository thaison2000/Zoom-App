import React from 'react'
import ChatBox from './ChatBox'
import TopBar from './TopBar'

const ChatWindow = () => {

    return (
        <div className='basis-4/5 flex flex-col'>
            <TopBar />
            <ChatBox />
        </div>
    )
}

export default ChatWindow