import React from 'react'
import LoginCard from './components/LoginCard'

function Login({setAuthorized,mail,setMail}) {
  return (
    <LoginCard setAuthorized={setAuthorized} mail={mail} setMail={setMail} />
  )
}

export default Login