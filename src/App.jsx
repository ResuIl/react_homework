import { useState } from 'react'
import Mainpage from '../src/mainpage/Mainpage'
import Login from '../src/login/Login'

function App() {
  const [isAuthorized,setAuthorized] = useState(false)
  const [mail,setMail] = useState('')
  return isAuthorized ? <Mainpage setAuthorized={setAuthorized} mail={mail}/> :  <Login setAuthorized={setAuthorized} mail={mail} setMail={setMail}/>
}

export default App