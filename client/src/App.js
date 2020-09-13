import React from 'react';
import Home from './component/Home'
import UserState from './context/users/UserState'
import './App.css';

function App() {
  return (
    <div className="container">
      <div>
        <h3 className="card text-center p-4 text-success">Demo project by FriendsTech</h3>
      </div>
     <div className='card'>
      <UserState>
       <Home/>
       </UserState>

      
     </div>
     <div className='card mt-1'>
        <p className="text-center p-3">Developed by Abdullah Naser & Shohedul</p>
      </div>
    </div>
  );
}

export default App;
