
import Toast from 'react-bootstrap/Toast';
import React from 'react';

const KisanToast = ({alert, showToast, color=""}) => {
  
  return (<Toast show={showToast} bg={color} >
    <Toast.Body className='text-white'>{alert}</Toast.Body>
  </Toast>);

}

export default KisanToast;