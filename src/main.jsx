import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Home from './Components/Home.jsx'
import Projects from './Components/Projects.jsx'
import AboutMe from './Components/AboutMe.jsx'
import ContactPage from './Components/ContactPage.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
<Route path='' element={<Home/>} />
<Route path='/about' element={<AboutMe/>}/>
<Route path='/projects' element={<Projects/>}/>
<Route path='/contact' element={<ContactPage/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
 
    
    
  </StrictMode>,
  
)
