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
import Photo from './Components/Photo/Photo'
import UserProfile from './Components/User/UserProfile/UserProfile'
import NotFound from './Components/Helper/NotFound/NotFound'


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
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
                <Route path='/foto/:id' element={<Photo />}></Route>
                <Route path='/perfil/:user' element={<UserProfile />}></Route>
                <Route path='*' element={<NotFound />}></Route>
              </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
