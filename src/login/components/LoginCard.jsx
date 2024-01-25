import { useState, useContext } from 'react'
import Context from '../../ContextWrapper';
import { useNavigate } from 'react-router-dom';

function LoginCard() {
  const navigate = useNavigate();
  const [isValid,setIsValid] = useState(false)
  const { mail, setAuthorized, setMail } = useContext(Context);
  return (
    <div className='flex h-screen justify-center items-center'>
      <form className='m-5 flex flex-col items-center justify-center w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] h-auto sm:h-[350px] md:h-[380px] lg:h-[400px] xl:h-[420px] 2xl:h-[450px] shadow shadow-zinc-395 rounded-[16px]'>
        <h1 className='text-3xl font-bold mb-5'>LOGIN FORM</h1>
        <label>Input your email:</label>
        <input 
          onChange={(e) => { 
            setMail(e.target.value);
            setIsValid(e.target.checkValidity());
          }} 
          required="True" 
          value={mail} 
          className={`border ${mail.length > 0 ? isValid ? 'bg-green-200 text-green-700 border-zinc-300' : "bg-red-200 text-red-700 border-red-300" : ""} rounded-[6px] w-full sm:w-[560px] h-[60px] my-3 pl-[18px]`} 
          type="email" 
          placeholder='example@example.com'
        />
        
        <button 
          disabled={!isValid} 
          onClick={() => { setAuthorized(isValid); navigate("/mainpage"); }} 
          className={`${isValid ? 'bg-yellow-400 hover:bg-amber-400' : "bg-slate-500" } font-bold text-[20px] rounded-[15px] w-full sm:w-[234px] h-[61px]`} 
          type='Submit'
        >
          Submit
        </button>
      </form>
    </div>

  )
}

export default LoginCard