import { Avatar } from '@mui/material'
import React from 'react'
import './HeaderOption.css'

function HeaderOption({Icon, avatar, title, onClick}) {
    // properties allow us we can reuse the component again
  return (
    <div  
      onClick ={onClick} 
      className="headerOption">
        {/* if i pass an Icon should i render the icon component   */}
        {Icon && <Icon className='headerOption__icon'/>}
        {/* if it is avatar then render the component below */}
        {avatar && (
            <Avatar 
                className='headerOption__icon'
                src={avatar}
            />
        )}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption