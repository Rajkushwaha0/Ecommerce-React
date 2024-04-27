import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
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
import { useCookies } from "react-cookie";

function Header(props) {
  const [token, setToken, removeCookie] = useCookies(["jwt-token"]);

  useEffect(() => {
    // console.log("token is", token);
  }, [token]);

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
                  {token["jwt-token"] ? (
                    <Link
                      className="link-btn"
                      to={"/"}
                      onClick={() => {
                        removeCookie("jwt-token");
                      }}
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link className="link-btn" to={"/login"}>
                      Login
                    </Link>
                  )}
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
