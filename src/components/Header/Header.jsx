import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

//CSS import
import "./Header.css";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navigator = useNavigate();
  function handleTitleClick() {
    navigator("/");
  }

  return (
    <div>
      <Navbar {...props}>
        <NavbarBrand onClick={handleTitleClick} id="title">
          Bharat Cart
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <UncontrolledDropdown nav inNavbar style={{ marginRight: "2rem" }}>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>User Profile</DropdownItem>
                <DropdownItem>
                  <Link to={"/cart"} className="link-btn">
                    Cart
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="link-btn" to={"/login"}>
                    Login
                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavbarText style={{ marginRight: "3rem" }}>Username</NavbarText>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
