import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FcContacts } from 'react-icons/fc';
import { SiGooglemessages } from "react-icons/si";
import styled from 'styled-components';
import { startCase } from 'lodash';

import callApi from '../store/middleware';
const LandingPage = () => {
  const [allContact, setAllContact] = useState([]);
  const [clicked, setClicked] = useState(false);

  const Body = styled.h1`
  font-size: 1.3em;
  overflow: auto;
  height: 75%;
  margin-top:10px;
`;

  const Box = styled.div`
  max-height: 500px;
  background-color: #A8E890;
  width: 60vh;
  margin:10px;
  `;

  const getContacts = async () => {
    try {
      const res = await callApi("/contact");
      setAllContact(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  const toggleExpander = (id) => {
    if (clicked === id) {
      return setClicked(null);
    }
    setClicked(id);
  };

  return (
    <div className='d-flex pb-5 min-vh-100 justify-content-center' style={{ backgroundColor: "#CFFF8D" }}>
      <Box className=' shadow mt-4 rounded'>
        <div className='px-3 py-2 d-flex justify-content-between align-items-center'>
          <h3 className='fs-3 shadow px-5 py-2 rounded text-center text-white' style={{backgroundColor: "#3D8361"}}>Contacts</h3>
          <Link to="/addContact"><FcContacts size={30} title={'Add Contact'} /></Link>
          <Link to="/messages"><SiGooglemessages size={30} title={'View Messages'} /></Link>
        </div>
        <Body>
          {allContact?.map((contact) => {
            const { firstName, lastName, _id: id } = contact || {};

            return (<div>
              <div key={id} onClick={() => toggleExpander(id)} className='justify-content-between shadow d-flex flex-wrap rounded my-3 mx-4 p-2' style={{backgroundColor:"#EEF2E6"}} >
                <span className='mx-1 fs-6'><b>Name:</b> {startCase(firstName)}  {startCase(lastName)}</span>
                <Link to={`/${id}`}><span className='px-2 text-white fs-6 rounded bg-primary'>Details</span></Link>
              </div>
            </div>
            )
          })}
        </Body>
      </Box>
    </div>
  )
}

export default LandingPage