import React from 'react'

function Navigation({setAuthorized , mail}) {
  return (
    <nav className='flex bg-zinc-400 h-[10vh]'>
        <div className="flex-none h-50 p-7">
            <span className='font-bold'>{mail}</span>
        </div>
        <div className="shrink w-full"></div>
        <div className="flex-none h-50 p-7">
            <button onClick={() =>{ setAuthorized(false) }} className='bg-yellow-400 font-bold rounded-[12px] w-[134px] h-[41px] hover:bg-amber-400 text-center' type='Submit'>Log out</button>
        </div>
    </nav>
  )
}

export default Navigation