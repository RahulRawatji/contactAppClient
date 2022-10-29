import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

import FormInput from '../components/FormInput';
import callApi from '../store/middleware';

const AddContact = () => {
  const navigate = useNavigate();
 
  const submitfromData = async(payload) => {
    const response = await callApi("/add-contact", payload, "POST");
    //:TODO Redirect and show some responses'w
    navigate('/');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { firstName, lastName, email, phone } = Object.fromEntries(formData.entries());
    const payload = {
      firstName,
      lastName,
      email,
      phoneNumber: phone
    }
    submitfromData(payload);
  };

  return (
    <div className='d-flex w-100 min-vh-100 justify-content-center ' style={{ backgroundColor: "#CFFF8D" }}>
      <div className='shadow mt-4 px-5 pb-5 pt-1  rounded h-50 mx-4' style={{ backgroundColor: "#A8E890" }}>
        <div className='mt-2 d-flex justify-content-center'>
          <h4 className='fs-4 shadow px-3 py-3 rounded text-center text-white' style={{backgroundColor: "#3D8361"}}>Add New Contact</h4>
        </div>
        <div className='mt-4'>
          <form onSubmit={submitHandler}>
              <FormInput title="First Name" placeholder={"Enter First Name"} type="text" />
              <FormInput title="Last Name" placeholder={"Enter Last Name"} type="text"/>
              <FormInput title="Email" placeholder={"Enter Email"}  type="email" required/>
              <FormInput title="Phone" placeholder={"Enter Phone Number"} type="number" />
            <div className='d-flex flex-row-reverse gap-3'>
              <button onClick={()=>navigate('/') } className='btn btn-sm bg-secondary text-light mt-3'>Back</button>
              <button className='btn btn-primary btn-sm mt-3'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddContact