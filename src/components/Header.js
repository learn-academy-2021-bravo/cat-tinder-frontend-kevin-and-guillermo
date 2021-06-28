import React, { useState } from 'react';
import {NavLink as PathLink} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,

} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Hero's Tinder</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
              <br/>
          <NavItem>
              <PathLink  to = '/'>Heroes Homepage</PathLink>
            </NavItem>
            <br/>
            <NavItem>
              <PathLink  to = '/heroindex'>All Heroes</PathLink>
            </NavItem>
            <br/>
            <NavItem>
              <PathLink  to = '/heronew'>Add New Hero</PathLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
                
 
