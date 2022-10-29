import React, { useEffect, useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from "react-router-dom";
import { startCase } from 'lodash';
import styled from 'styled-components';

import callApi from '../store/middleware';

const ViewMessages = () => {
  const [allMessages, setAllMessages] = useState([]);
  const navigate = useNavigate();

  const getMessages = async () => {
    try {
      const response = await callApi("/messages");
      setAllMessages(response);
    } catch (error) {
      console.log(error);
    }
  };

  const Body = styled.h1`
  font-size: 1rem;
  overflow: auto;
  height: 80%;
  margin-top:10px;
`;

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className='d-flex w-100 min-vh-100 justify-content-center ' style={{ backgroundColor: "#CFFF8D" }}>
      <div className=' shadow mt-4 rounded ' style={{ backgroundColor: "#A8E890", height: '500px' }}>
        <div className='d-flex align-items-center'>
          <BiArrowBack title="Go Back" size={20} onClick={() => navigate('/')} className="mx-3  mt-2" />
          <h4 className='fs-3 px-5 py-1 mx-3 mt-2 shadow rounded text-center text-white' style={{backgroundColor: "#3D8361"}}>Messages</h4>
        </div>
        <Body>
        {allMessages?.map(message => {
          return (<div className='bg-light mx-3 my-3 rounded p-2'>
            <h5>{startCase(message.message)}</h5>
            <p>{startCase(message.contactName)}</p>
          </div>
          )
        })
        }
        </Body>
      </div>
    </div>
  )
}

export default ViewMessages