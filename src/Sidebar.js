import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser} from "./features/userSlice"
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser)
    console.log(user)

    const recentItem = (topic) =>{
        <div className="sidebar__recentItem">
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    }

  return (
    <div className="sidebar">
        <div class="sidebar__top">
            <img 
                src="https://image.shutterstock.com/image-vector/abstract-waving-particle-technology-background-260nw-2128959116.jpg" alt=""/>
            <Avatar 
                src={user.photoUrl}
                className="sidebar__avatar"
            >{user?.displayName[0].toUpperCase()} </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div class="sidebar__stats">
            <div class="sidebar__stat">
            <p>Who viewed you</p>
            <p class="sidebar__statNumber">
                2,342
            </p>
            </div>
            <div class="sidebar__stat">
            <p>Views on post</p>
            <p class="sidebar__statNumber">
                2,422
            </p>
            </div>
        </div>
        
        <div class="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('software engineering')}
            {recentItem('programming')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar