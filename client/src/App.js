import React from 'react';
import Home from './component/Home'
import UserState from './context/users/UserState'
import './App.css';

function App() {
  return (
    <div className="container card">
      <div>
        <h3 className="card text-center p-4">Demo project </h3>
      </div>
      <UserState>
       <Home/>
       </UserState>

       <div>
        <h3 className="card text-center p-4">develop by naser & shoedul</h3>
      </div>
    </div>
  );
}

export default App;
