import React from 'react'

function LoginCard() {
  return (
    <div className='flex h-screen justify-center items-center'>
      <form className='flex flex-col items-center justify-center w-[700px] h-[310px] shadow shadow-zinc-395 rounded-[16px]'>
        <h1 className='text-3xl font-bold mb-5'>LOGIN FORM</h1>
        <label>Input your email:</label>
        <input className='border border-zinc-300 rounded-[6px] w-[560px] h-[60px] my-3 pl-[18px]' type="email" placeholder='example@example.com'/>
        <button className='bg-yellow-400 font-bold text-[20px] rounded-[15px] w-[234px] h-[61px] hover:bg-amber-400' type='Submit'>Submit</button>
      </form>
    </div>
  )
}

export default LoginCard