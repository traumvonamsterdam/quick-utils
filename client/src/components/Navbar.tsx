import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
  DropdownItem
} from "reactstrap";

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let history = useHistory();

  const onClickHome = e => {
    e.preventDefault();
    history.push('/')
  };

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand onClick={onClickHome} href="/">
        QuickUtils
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              target="_blank"
              href="https://github.com/reactstrap/reactstrap"
            >
              reactstrap GitHub
            </NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Sign in
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem href="/auth/google">Google</DropdownItem>
              <DropdownItem href="/auth/github">Github</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="/">Home</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
