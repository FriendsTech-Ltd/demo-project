
import React, { useState, useEffect,Fragment, useContext } from "react";

import UserContext from '../context/users/userContext'

const AddData = () => {
  const userContext = useContext(UserContext);
  const { addUser } = userContext;



useEffect(()=>{

},[])

const [formData,setFormData]=useState({
            userName:"",
             email:"",
             address:"",
       
      });
const {userName,email,address}=formData

const onSubmit=e=>{
    e.preventDefault();
    addUser(formData);
    }

const onChange=e=>{setFormData({...formData,[e.target.name]:e.target.value});}
    return <Fragment>

        <div className='p-3'>
    

          <h5 className="text-center">Add Data</h5>
          <form onSubmit={e=>onSubmit(e)}>
           
            <div className="form-group">
              <label htmlFor="websiteName"> User name: </label>
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

            

            
<input type="submit"  className="btn btn-success form-control" />

          </form>
        </div>

    </Fragment>
}

export default AddData;