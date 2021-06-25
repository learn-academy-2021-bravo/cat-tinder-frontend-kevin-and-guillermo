import React, { useState } from 'react';
import {NavLink as PathLink} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
              <br/>
          <NavItem>
              <PathLink  to = '/herohome'>Heroes Homepage</PathLink>
            </NavItem>
            <br/>
            <NavItem>
              <PathLink  to = '/heroindex'>All your Heroes</PathLink>
            </NavItem>
            <br/>
            <NavItem>
              <PathLink  to = '/heronew'>Add A New Hero</PathLink>
            </NavItem>
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
                
 
