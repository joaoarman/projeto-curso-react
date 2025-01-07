import React from 'react'
import UserHeader from './UserHeader/UserHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from './Feed/Feed'
import PhotoPost from './PhotoPost/PhotoPost'
import UserStats from './UserStats/UserStats'


const User = () => {
  return (
    <div className="container">
        <UserHeader />
        <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/postar" element={<PhotoPost />} />
            <Route path="/estatisticas" element={<UserStats />} />
        </Routes>
    </div>
  )
}

export default User
