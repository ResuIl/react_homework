import React from 'react'

function ContentCard() {
  return (
    <>
        <div className='bg-zinc-200 w-[500px] h-[220px] m-5'>
            <div className='flex flex-wrap'>
                <h1 className='w-full font-bold mt-4 ml-4 mb-2 text-[25px]'>Card Title</h1>
                <p className='w-full ml-4 mb-4 h-[10vh] text-ellipsis overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque quas at nesciunt ad veritatis id excepturi consequuntur ipsa nobis unde totam non voluptatum, recusandae enim, amet, labore distinctio asperiores tempore!</p>
                <div className='flex bg-zinc-400 w-full h-[6.5vh] justify-end'>
                <div className='flex-none w-[100px] h-14'></div>
                    <div className='shrink w-50 h-14 m-2'>
                        <button className='bg-yellow-400 font-bold text-[20px] rounded-[5px] w-[114px] h-[45px] hover:bg-amber-400' type='Submit'>Edit</button>
                        <button className='bg-yellow-400 font-bold text-[20px] rounded-[5px] w-[114px] h-[45px] hover:bg-amber-400 ml-4' type='Submit'>Delete</button>
                    </div> 
                </div>
            </div>
        </div>
    </>
  )
}

export default ContentCard