import React from 'react'

const GroupSettingAlert = () => {
    return (
        <div className='w-[30vw] h-[60vh] fixed top-[25vh] left-[35vw] bg-white z-20 rounded-2xl drop-shadow-2xl'>
            <h1 className='mx-8 mt-8 font-medium text-xl mb-2'>
            <svg className="h-[20px] w-[20px] text-black inline mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="3" />  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
            Setting
            </h1>
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <h1 className='ml-8 font-medium italic'>
                        Change group name:
                    </h1>
                    <input type="text" className=' mx-8 my-4 p-4 w-[80%] rounded-2xl' placeholder='name ...' />
                </div>
                <div className='flex flex-col my-2'>
                    <h1 className='ml-8 font-medium italic'>
                        Change group avatar:
                    </h1>
                    <input
                        type="file"
                        className=" block w-full text-sm text-slate-500
                                    file:mr-4 file:py-2 file:px-4
                                    file:rounded-full file:border-0
                                    file:text-sm file:font-semibold
                                    file:bg-violet-50 file:text-black
                                    hover:file:bg-violet-100 ml-8 my-4
                    "/>
                </div>
                <div className='flex flex-col my-2'>
                    <h1 className='ml-8 font-medium italic'>
                        Delete group:
                    </h1>
                    <div>
                    <input type="text" className=' mx-8 my-4 p-4 w-[70%] rounded-2xl inline-block' placeholder='Rewrite your group name ...' />    
                    <svg className="h-8 w-8 text-red-500 inline hover:w-10 hover:h-10"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroupSettingAlert