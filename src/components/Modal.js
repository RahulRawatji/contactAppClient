import React, { useEffect, useState } from 'react';
import "../css/Modal.css";
import { useNavigate } from "react-router-dom";
import { CgCloseO } from "react-icons/cg";
import { GrSend } from 'react-icons/gr';
import { pad, random } from "lodash";

import FormInput from './FormInput';
import callApi from '../store/middleware';

const Modal = ({ closeModal, data }) => {
  const navigate = useNavigate();
  const [otpValue, setOtpValue] = useState();
  let message = ` Hi. Your OTP is : ${otpValue}`;
  const { firstName } = data;
  const generateOtp = () => {
    const otp = pad(random(1001, 998998), 6, random(0, 9));
    setOtpValue(otp);
  };

  useEffect(() => {
    generateOtp();
  },[])

  const submitfromData = async (payload) => {
    const response = await callApi("/sendOtp", payload, "POST");
    //:TODO Redirect and show some responses'w
    navigate('/');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(Object.fromEntries(formData.entries()));
    const { phoneNumber } = Object.fromEntries(formData.entries());
    const payload = {
      contactNumber: phoneNumber,
      contactName: firstName,
      message
    }
    
    submitfromData(payload);
  };


  return (
    <div className='modalBackground'>
      <div className='modalContainer'>

        <div className='title'>
          <h4  className='shadow mt-2 px-4 py-2 rounded text-center text-white' style={{backgroundColor: "#3D8361"}}>Send Message</h4>
          <CgCloseO size={22} onClick={() => closeModal(false)}/>
        </div>
        <div className='modalBody'>
          <form onSubmit={submitHandler} >
            <FormInput title="Phone Number" placeholder={"Enter Phone Number"} type="text" />
            <div className="form-group row">
              <label for="message" className="col-sm-2 col-form-label">Message</label>
              <div >
                <input type="text" readonly className="form-control-plaintext" id="message" value={message} />
              </div>
            </div>
            <div className='d-flex flex-row-reverse'>
              <button className='bg-primary rounded px-3 fs-6 py-1 text-white mt-3'>Send <GrSend size={18} color="white" /></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal