import React, { useState, useContext, useEffect } from 'react'
import UserContext from '../context/users/userContext'

const EditUserModal = () => {
  const userContext = useContext(UserContext);

  const { editableUser, editUser } = userContext;

  const [formData,setFormData] = useState({
    _id: "",
    userName: "",
    email: "",
    address: "",
});

useEffect(() => {
  setFormData({
    _id: editableUser._id,
    userName: editableUser.userName,
    email: editableUser.email,
    address: editableUser.address,
  })
}, [editableUser])


const {userName,email,address}=formData

const onSubmit = e =>{
  e.preventDefault();
  editUser(formData)
  }

const onChange=e=>{setFormData({...formData,[e.target.name]:e.target.value});}

  return (
    <div>
    
      {/* <span><i data-toggle="modal" data-target="#exampleModal" style={{ cursor: 'pointer' }} className="fas fa-pencil-alt"></i></span> */}
      <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <form onSubmit={e=>onSubmit(e)}>
           
           <div className="form-group">
             <label htmlFor="websiteName"> userName: </label>
             <input
               required
               type="text"
               className="form-control"
               placeholder="Enter Your userName"
               name="userName"
               value={userName}
               onChange={e=> onChange(e)}

             />
           </div>

           <div className="form-group">
             <label htmlFor="websiteUrl"> Email: </label>
             <input
               required
               type="text"
               className="form-control"
               placeholder="Enter Your Email"
               name="email"
               value={email}
               onChange={e=> onChange(e)}

             />
           </div>

           <div className="form-group">
             <label htmlFor="address">Address </label>
             <input
               required
               type="websitePass"
               className="form-control"
               placeholder="Enter Your Address"
               name="address"
               value={address}
               onChange={e=> onChange(e)}
              
             />
           </div>

           

           


<div class="modal-footer">
        <input type="submit" className="btn btn-success form-control" />
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
         </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export  default EditUserModal;