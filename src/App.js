import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <div class="app__body">
      {/* App Body */}
      {/* Feed */}
      {/* Widgets */}
      {/* Sidebar */}
        <Sidebar/>
      </div>
    </div>

  );
}

export default App;
