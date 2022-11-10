import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Admin from './pages/Admin'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import NoAccess from './pages/NoAccess'
import SignUp from './pages/SignUp'
import Error from './pages/Error'
import './css/App.css'
import Navbar from './components/Navbar'
import { GlobalContext } from './Context'

const App = () => {
  const {admin}=GlobalContext();
  return (
    <div className='App'>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/admin' element={admin?<Admin />:<Navigate to='/noaccess'/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/noaccess' element={<NoAccess/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App