import React from 'react'
import { FcHome } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='text-light p-2 px-5 d-flex justify-content-between align-items-center' style={{backgroundColor:"#425F57"}}>
      <h5 style={{ fontSize:'1.2rem'}}>Kisan Contact App</h5>
      <div className='d-flex align-items-center'>
        <Link to={'/'}>
          <FcHome className='mx-3' title="Home" size={25} />
        </Link>
        <h5 style={{ fontSize:'1.2rem'}}>developedBy@Rahul</h5>
      </div>
      </nav>
  )
}

export default Navbar