import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
  } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(props) {
    const [collapsed, setCollapsed] = useState(true);
  
    const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div>
        <Navbar color="info" light>
          <NavbarBrand href="/" >
            Website Name
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink to="/"> Home </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/faq">
                  FAQ
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  )
}

export default Header