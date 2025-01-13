import React from 'react'
import Feed from '../../Feed/Feed'

const UserFeed = ({ user }) => {
  return (
    <div>
      <Feed user={user}/>
    </div>
  )
}

export default UserFeed
