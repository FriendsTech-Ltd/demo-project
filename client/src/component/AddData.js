
import React, { useState, useEffect,Fragment } from "react";

const AddData = () => {



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

    }

const onChange=e=>{setFormData({...formData,[e.target.name]:e.target.value});}
    return <Fragment>
      

<div className="row">

        <div className="col-md-6 offset-md-3">
    

          <h2 className="text-center display-6">Add Data</h2>
          <form onSubmit={e=>onSubmit(e)}>
           
            <div className="form-group">
              <label htmlFor="websiteName"> userName: </label>
              <input
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
      </div>

    </Fragment>
}

export default AddData;