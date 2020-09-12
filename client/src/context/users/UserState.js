import React, { useReducer } from 'react';
import axios from 'axios';

import UserContext from './userContext';
import userReducer from './userReducer'


import {
  ADD_USER,
  GET_USERS,
  USER_ERROR
} from '../type';

const UserState = props => {
  const initialState = {
    users:[],
    error: null
  }

  const [state, dispatch] = useReducer(userReducer, initialState);

  // Add customer
  const addUser = async (user) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/user", user, config);
      dispatch({ type: ADD_USER, payload: res.data.data });
    } catch (err) {
      dispatch({ type: USER_ERROR, payload: err.response.data.error });
    }
  }

  // Get all expense
  const getUsers = async () => {
  
    try {
      const res = await axios.get('/api/user');
      dispatch({
        type: GET_USERS, payload: res.data.data
      });
    } catch (err) {
      dispatch({type: USER_ERROR, payload: err.response.data.error});
    }
  }

  
  return(
    <UserContext.Provider
    value={{
      users: state.users,
      error: state.error,
      addUser,
      getUsers
    
    }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState;