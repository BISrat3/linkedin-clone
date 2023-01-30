import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { useSelector } from 'react-redux';
import {selectUser} from '../src/features/userSlice'

function App() {
  // pull the user from the data store
  const user = useSelector(selectUser)

  return (
    <div className="app">
      <Header />
      {/* if their is a user render login page other wise logout */}
      {!user ? ( <Login />) :(
        <div class="app__body">
        {/* App Body */}
        {/* Widgets */}
        {/* Sidebar */}
          <Sidebar />
        {/* Feed */}
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
