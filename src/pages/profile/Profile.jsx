import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
const Profile = () => {
  return (
    <>
    <Topbar />
    <div className="profile">
    <Sidebar/>
    <div className="profileRight"></div>
    <Feed/>
    <Rightbar/>
    </div>
    
    </>
  )
}

export default Profile