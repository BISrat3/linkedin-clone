import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from "./features/userSlice"
import { auth } from "./firebase"

function Header() {
  const dispatch = useDispatch()
  
  const logoutOfApp = () => {
    dispatch(logout())
    auth.signout()
  }
  return (
    <div className='header'>
        <div className="header__left">
            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'/>
            <div className="header__search">
                <SearchIcon/>
                {/* SearchIcon */}
                <input type="text" placeholder='Search'/>
            </div>
        </div>

        <div className="header__right">
            {/* reusable components */}
            {/* header options */}
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatIcon} title='Message'/>
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption 
              avatar='https://avatars.githubusercontent.com/u/99110345?v=4' 
              title='me'
              onClick={logoutOfApp}
              />
        </div>
    </div>
  )
}

export default Header