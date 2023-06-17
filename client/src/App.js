import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import UserSignUp from './pages/usersignup';
import UserLogin from './pages/userlogin';
import Admin from './pages/admin';
import Collegeform from './pages/collegeform';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/UserSignUp' element={<UserSignUp />}/>
          <Route path='/UserLogin' element={<UserLogin />}/>
          <Route path='/Admin' element={<Admin />}/>
          <Route path='/Collegeform' element={<Collegeform/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App