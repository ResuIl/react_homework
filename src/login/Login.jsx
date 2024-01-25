import { useEffect } from 'react'
import LoginCard from './components/LoginCard'
import { useLocation } from 'react-router-dom'

function Login() {
  const location = useLocation()
  
  useEffect(() => {
    console.log(location.state)
  }, [])
  
  return (
    <LoginCard/>
  )
}

export default Login