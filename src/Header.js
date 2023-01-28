import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
        Header test
        <div class="header__left">
            <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt=''/>
            <div class="header__search">
                <SearchIcon/>
                {/* SearchIcon */}
                <input type="text"/>
            </div>
        </div>

        <div class="header__right">

        </div>
    </div>
  )
}

export default Header