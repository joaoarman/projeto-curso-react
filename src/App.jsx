import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import { UserStorage } from './Contexts/userContext'

import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import Footer from './Components/Footer/Footer'
import Account from './Components/Account/Account'
import ProtectedRoute from './Components/Helper/ProtectedRoute'
import User from './Components/User/User'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/login/*' element={<Login />}></Route>
            <Route 
              path='/conta/*' 
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            >
            </Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  )
}

export default App
