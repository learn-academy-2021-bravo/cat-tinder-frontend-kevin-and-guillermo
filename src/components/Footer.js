import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Example = () => {
  return (
    <div>
      <Nav className='footerInfo'>
        <NavItem>
          <NavLink href="/" active>Heroes Homepage</NavLink>
        </NavItem> 
        <NavItem>
          <NavLink href="/heroindex">All Heroes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/heronew">Add New Hero</NavLink>
        </NavItem>
        <p>Created By Guillermo & Kevin</p>
      </Nav>
    </div>
  );
}

export default Example;
