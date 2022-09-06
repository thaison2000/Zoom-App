import React, { useState } from 'react'
import GroupAddAlert from '../../Alerts/GroupAddAlert'

const GroupLinks = () => {

    const [groupAdd, setgroupAdd] = useState(false)

    const handleClickGroupAdd = ()=>{
        setgroupAdd(!groupAdd)
    }

    return (
        <div className='flex flex-col justify-center mt-4 rounded-2xl bg-white'>
            <div className='p-4  hover:bg-gray-200 rounded-2xl flex flex-row items-center' onClick={handleClickGroupAdd}>
                <svg className="h-8 w-8 text-red-500 inline mr-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <line x1="12" y1="5" x2="12" y2="19" />  <line x1="5" y1="12" x2="19" y2="12" /></svg>
                Add Group
            </div>
            <div>
                <input type="text" placeholder='seach ...' className='p-4 w-full focus:outline-0 rounded-2xl' />
            </div>
           <div className='overflow-auto h-[270px]'>
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
            <div className='p-4  hover:bg-gray-400 rounded-2xl'>
                <span>group 1</span>
            </div>
           </div>
            {groupAdd? <GroupAddAlert/> : null}
        </div>
    )
}

export default GroupLinks