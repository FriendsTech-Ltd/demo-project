import {
  ADD_USER,
  GET_USERS,
  USER_ERROR,
  DELETE_USER,
  EDITABLE_USER, EDIT_USER
} from '../type';

export default (state, action) => {
  switch(action.type){
    case EDIT_USER:
      return {
        ...state,
        users: state.users.map(user =>
          user._id === action.payload._id ? action.payload : user
        )
      }
    case EDITABLE_USER:
      return {
        ...state,
        editableUser: action.payload
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user._id !== action.payload)
      }
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case GET_USERS:
      return {
        ...state,
        users: action.payload
      }
    case USER_ERROR:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}