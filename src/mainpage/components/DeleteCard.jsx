import React from 'react'

function DeleteCard() {
  return (
    <>
        <div className='flex h-screen justify-center items-center'>
            <form className='flex flex-col items-center  w-[700px] h-[220px] shadow shadow-zinc-395 rounded-[16px]'>
                <h1 className='text-3xl font-bold m-5'>Delete Card</h1>
                <label>Are you sure you want to delete card "Card name"?</label>
                <div className='flex justify-end m-5'>
                    <button className='bg-white-400 font-bold text-[20px] rounded-[15px] w-[134px] h-[51px] hover:bg-zinc-100 border-solid border-2 border-zinc-500' type='Submit'>Close</button>
                    <button className='bg-yellow-400 font-bold text-[20px] rounded-[15px] w-[134px] h-[51px] hover:bg-amber-400 ml-4' type='Submit'>Delete</button>
                </div>
                
            </form>
        </div>
    </>
  )
}

export default DeleteCard