import React, { useReducer } from 'react';
import axios from 'axios';

import UserContext from './userContext';
import userReducer from './userReducer'


import {
  ADD_USER,
  GET_USERS,
  USER_ERROR,
  DELETE_USER,
  EDIT_USER,
  EDITABLE_USER
} from '../type';

const UserState = props => {
  const initialState = {
    users:[],
    editableUser:{},
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

  // Delete user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`/api/user/${id}`);
      dispatch({ 
        type: DELETE_USER, payload: id
      })
    } catch (err) {
      dispatch({type: USER_ERROR, payload: err.response.data.error});
    }
  }

  
    // Edit user
    const editUser = async (updatedData) => {
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      };
  
      try {
        const res = await axios.put(`/api/user/${updatedData._id}`, updatedData, config);
        dispatch({ 
          type: EDIT_USER, payload: res.data.data
        })
      } catch (err) {
        dispatch({type: USER_ERROR, payload: err.response.data.error});
      }
    }

    // Set user for editing
  const setEditableUser = (user) => {
    dispatch({ type: EDITABLE_USER, payload: user})
  }


  
  return(
    <UserContext.Provider
    value={{
      users: state.users,
      editableUser: state.editableUser,
      error: state.error,
      addUser,
      getUsers,
      deleteUser,
      editUser,
      setEditableUser
    
    }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState;