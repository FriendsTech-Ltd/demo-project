import {
  ADD_USER,
  GET_USERS,
  USER_ERROR
} from '../type';

export default (state, action) => {
  switch(action.type){
    case ADD_USER:
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