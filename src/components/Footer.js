import React from 'react'
import { Navbar } from 'reactstrap' 

function Footer() {
  return (
    <>
      <Navbar className='navbar-footer' fixed="bottom" color='info'>
        <p id='footer-text'>&copy; name of team </p>
      </Navbar>
    </>
  )
}

export default Footer