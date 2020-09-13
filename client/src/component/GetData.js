
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
    <div className='p-3'>
      <h5 className="text-center">User Data</h5>
       <div style={{overflow: 'scroll', height: '450px'}}>
       <table className="table table-striped table-sm table-bordered text-center">
      <thead  className="thead-dark">
        <tr>
        
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Address</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
      
        </tr>
      </thead>
      <tbody className="table-striped">
          {users.map(
            (user) => (
              <tr key={user._id}>
              <td>{user.userName}</td>
              <td >{user.email}</td>
              <td>{user.address}</td>
              {/* <td><span onClick={}><i className="fas fa-pencil-alt"></i></span></td>  */}
              <td><span onClick={() => handleEdit(user)} data-toggle="modal" data-target="#exampleModal" style={{ cursor: 'pointer' }} ><i  className="fas fa-pencil-alt"></i></span></td>

              <td><span style={{ cursor: 'pointer' }} onClick={() => deleteUser(user._id)}><i  className="fas fa-trash-alt text-danger"></i></span></td>
              </tr>
            )
          )}
      
      </tbody>
  </table>
       </div>
  <EditUserModal/> 
    </div>
  )
}
export default GetData; 