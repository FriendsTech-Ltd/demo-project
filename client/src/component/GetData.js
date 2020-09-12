
import React,{useContext,useEffect} from 'react';
import UserContext from '../context/users/userContext'

const GetData = () => {

  const {getUsers,users,error} = useContext(UserContext)
console.log(users)
  useEffect(()=>{
getUsers()
// eslint-disable-next-line
  },[])

  return (

    <table className="table table-sm ">
    <thead>
      <tr>
      
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Address</th>
     
      </tr>
    </thead>
    <tbody>
        {users.map(
          user=>(
            <tr>
            <td>{user.userName}</td>
            <td >{user.email}</td>
            <td>{user.address}</td>
            <td><span><i className="fas fa-pencil-alt"></i></span></td> 
             <td><span><i  className="fas fa-trash-alt"></i></span></td>
            </tr>
          )
        )}
    
    </tbody>
  </table>
  )
}
export default GetData; 