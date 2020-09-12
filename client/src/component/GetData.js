
import React,{useContext,useEffect} from 'react';


const GetData = () => {

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