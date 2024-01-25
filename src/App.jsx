import { useContext } from 'react'
import Mainpage from '../src/mainpage/Mainpage'
import Login from '../src/login/Login'
import Context from './ContextWrapper'
import NotFound from './mainpage/components/NotFound'
import Details from './mainpage/components/Details'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {
  const { authorized } = useContext(Context);
  return(
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace/>}></Route>
      {authorized ? 
      (<Route path="/mainpage" element={<Mainpage/>}/>):
      (<Route path="/login" element={<Login/>}/>)}

      <Route path='/details/:message' element={<Details/>} />

      <Route path='*' element={<NotFound/>}/>
    </Routes>

  );
}

export default App