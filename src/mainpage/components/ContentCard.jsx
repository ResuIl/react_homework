import React from 'react'

function ContentCard({setEditCardState, setDeleteCardState, setCurrentKey, title, description, currentKey}) {
  return (
    <>
        <div className='w-[440px] h-[235px] border rounded-[5px] border-zinc-300 m-5'>
            <div className='bg-[#E7E7E7] p-[30px] h-[76%]'>
              <h1 className='text-[25px] font-bold'>{title}</h1>
              <p className='h-[10vh] text-ellipsis overflow-hidden'>{description}</p>
            </div>
            <div className='flex bg-zinc-300 justify-end h-14 border rounded-b-[5px] items-center'>
              <button className='bg-yellow-400 py-2 px-6 rounded-[5px] font-bold hover:bg-yellow-500' onClick={()=>{ setEditCardState(true); setCurrentKey(currentKey) }}>Edit</button>
              <button className='bg-yellow-400 py-2 px-6 rounded-[5px] font-bold mx-2 hover:bg-yellow-500' onClick={()=>{ setDeleteCardState(true); setCurrentKey(currentKey) }}>Delete</button>
            </div>
        </div>
    </>
  )
}

export default ContentCard