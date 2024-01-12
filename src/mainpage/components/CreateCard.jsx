import React from 'react'

function CreateCard() {
  return (
    <div className='flex h-screen justify-center items-center'>
      <form className='flex flex-col items-center  w-[700px] h-[350px] shadow shadow-zinc-395 rounded-[16px]'>
        <h1 className='text-3xl font-bold mb-5'>Create Card</h1>
        <label>Title</label>
        <input className='border border-zinc-300 rounded-[6px] w-[560px] h-[60px] my-3 pl-[18px]' type="email" placeholder='example@example.com'/>
        <label>Description</label>
        <input className='border border-zinc-300 rounded-[6px] w-[560px] h-[60px] my-3 pl-[18px]' type="email" placeholder='example@example.com'/>
        <div className='flex justify-end'>
          <div className='flex-none w-[284px] h-14'></div>
          <div className='shrink w-500 h-14'>
            <button className='bg-white-400 font-bold text-[20px] rounded-[15px] w-[134px] h-[51px] hover:bg-zinc-100 border-solid border-2 border-zinc-500' type='Submit'>Close</button>
            <button className='bg-yellow-400 font-bold text-[20px] rounded-[15px] w-[134px] h-[51px] hover:bg-amber-400 ml-4' type='Submit'>Create</button>
          </div>    
        </div>
      </form>
    </div>
  )
}

export default CreateCard