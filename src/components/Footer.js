import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="/" active>Heroes Homepage</NavLink>
        </NavItem> 
        <NavItem>
          <NavLink href="/heroindex">View All Heroes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/heronew">Add A New Hero</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Example;
