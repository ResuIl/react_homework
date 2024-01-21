import { useContext } from 'react'
import Mainpage from '../src/mainpage/Mainpage'
import Login from '../src/login/Login'
import Context from './ContextWrapper'

function App() {
  const {authorized} = useContext(Context);
  return authorized ? <Mainpage /> : <Login/> 
}

export default App