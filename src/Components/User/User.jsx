import React from 'react'
import UserHeader from './UserHeader/UserHeader'
import { Route, Routes } from 'react-router-dom'
import UserFeed from './UserFeed/UserFeed'
import PhotoPost from './PhotoPost/PhotoPost'
import UserStats from './UserStats/UserStats'
import { UserContext } from '../../Contexts/userContext'
import NotFound from '../Helper/NotFound/NotFound'


const User = () => {

  const {data} = React.useContext(UserContext);

  return (
    <div className="container">
        <UserHeader />
        <Routes>
            <Route path="/" element={<UserFeed user={data.id}/>} />
            <Route path="/postar" element={<PhotoPost />} />
            <Route path="/estatisticas" element={<UserStats />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default User
