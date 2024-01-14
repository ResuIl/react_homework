import { useState } from 'react'

function LoginCard({setAuthorized, mail, setMail}) {
  const [isValid,setIsValid] = useState(false)
  return (
    <div className='flex h-screen justify-center items-center'>
      <form className='flex flex-col items-center justify-center w-[700px] h-[310px] shadow shadow-zinc-395 rounded-[16px]'>
        <h1 className='text-3xl font-bold mb-5'>LOGIN FORM</h1>
        <label>Input your email:</label>
        <input onChange={(e)=>{ 
          setMail(e.target.value) 
          setIsValid(e.target.checkValidity()) 
        }} required="True" value={mail} className={`border ${isValid ? 'bg-green-200 text-green-700 border-zinc-300' : "bg-red-200 text-red-700 border-red-300"} rounded-[6px] w-[560px] h-[60px] my-3 pl-[18px]`} type="email" placeholder='example@example.com'/>
        
        <button disabled={!isValid} onClick={() => { setAuthorized(isValid) }} className={`${isValid ? 'bg-yellow-400 hover:bg-amber-400' : "bg-slate-500" } font-bold text-[20px] rounded-[15px] w-[234px] h-[61px]`} type='Submit'>Submit</button>
      </form>
    </div>
  )
}

export default LoginCard