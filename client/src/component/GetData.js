
import React,{useContext,useEffect} from 'react';
import UserContext from '../context/users/userContext'

import EditUserModal from '../component/EditUserModal'


const GetData = () => {
  const {getUsers, users, error, deleteUser, setEditableUser, editableUser} = useContext(UserContext)
  useEffect(()=>{
  getUsers()
// eslint-disable-next-line
  },[]);

  const handleEdit = (user) => {
    setEditableUser(user)
  }

  return (
    <div>
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
          (user) => (
            <tr key={user._id}>
            <td>{user.userName}</td>
            <td >{user.email}</td>
            <td>{user.address}</td>
            {/* <td><span onClick={}><i className="fas fa-pencil-alt"></i></span></td>  */}
            <td><span onClick={() => handleEdit(user)} data-toggle="modal" data-target="#exampleModal" style={{ cursor: 'pointer' }} ><i  className="fas fa-pencil-alt"></i></span></td>

            <td><span style={{ cursor: 'pointer' }} onClick={() => deleteUser(user._id)}><i  className="fas fa-trash-alt"></i></span></td>
            </tr>
          )
        )}
    
    </tbody>
  </table>
  <EditUserModal/> 
    </div>
  )
}
export default GetData; 