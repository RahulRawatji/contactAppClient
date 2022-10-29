import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BiMailSend } from 'react-icons/bi';
import callApi from '../store/middleware';
import Modal from '../components/Modal';

function Details(props) {
  const { id } = useParams();
  const [contactData, setContactData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const getIdData = async () => {
    const contactDetails = await callApi(`/details/${id}`);
    setContactData(contactDetails);
  };

  useEffect(() => {
    getIdData();
  }, []);


  return (
    <div className='d-flex min-vh-100 justify-content-center' style={{ backgroundColor: "#CFFF8D" }}>
      <div className=' shadow mt-4 px-5 pb-5 pt-1 rounded h-50 mx-4' style={{ backgroundColor: "#A8E890" }}>
        <div className='d-flex justify-content-center'>
          <h3 className='shadow mt-2 px-4 py-2 rounded text-center text-white' style={{backgroundColor: "#3D8361"}}>Contact Details</h3>
        </div>
        <div className='d-flex flex-wrap gap-3 mt-3 justify-content-around'>
          <div className='col-md-4'><b>First Name:</b><span> {contactData?.firstName}</span></div>
          <div className='col-md-4'><b>Last Name:</b><span> {contactData?.lastName}</span></div>
          <div className='col-md-4'><b>Email:</b><span> {contactData?.email}</span></div>
          <div className='col-md-4'><b>Phone:</b> {contactData?.phoneNumber}</div>
        </div>
        <div className='d-flex flex-row-reverse mt-3 mr-1 gap-3'>
          <button onClick={() => navigate('/')} className='btn btn-sm bg-secondary text-light '>Back</button>
          <button onClick={() => setShowModal(true)} className='btn btn-sm bg-primary text-light'>Send Message<BiMailSend size={22} className="mx-1" /></button>
        </div>
      </div>
      {showModal ? <Modal closeModal={setShowModal} data={contactData} /> : null}
    </div>
  )
}

export default Details