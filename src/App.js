import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {selectUser, login, logout} from './features/userSlice'
import Feed from './Feed';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Sidebar from './Sidebar';
import Widgets  from './Widgets';

function App() {
  // pull the user from the data store
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  // when the app component loads we fire off a pieace of code
  useEffect(() => {
    // it means persisted authentication
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        //  user is logged out
        dispatch(logout())
      }
    })
  },[])

  return (
    <div className="app">
      <Header />
      {/* if their is a user render login page other wise logout */}
      {!user ? ( 
        <Login />
        ) :(
        <div class="app__body">
        {/* App Body */}
        {/* Widgets on the right */}
          <Widgets />
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
