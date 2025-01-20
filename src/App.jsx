import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Sidebar from './Components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
<Sidebar/>
<Outlet/>

    </>
  )
}

export default App
