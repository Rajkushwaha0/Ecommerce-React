import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
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
import CartContext from "../../context/CartContext";
import axios from "axios";

function Header(props) {
  //for cookie
  const [token, setToken, removeCookie] = useCookies(["jwt-token"]);
  useEffect(() => {
    // console.log("token is", token);
  }, [token]);

  //for toggle of header
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //for navigation
  const navigator = useNavigate();
  function handleTitleClick() {
    navigator("/");
  }

  //context
  const { user, setUser } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  // console.log(user);

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
                    Cart {cart.products.length}
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  {token["jwt-token"] ? (
                    <Link
                      className="link-btn"
                      to={"/"}
                      onClick={() => {
                        removeCookie("jwt-token", { httpOnly: true });
                        axios.get("http://localhost:8765/logout", {
                          withCredentials: true,
                        });
                        setUser(null);
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
            {user && (
              <NavbarText style={{ marginRight: "3rem" }}>
                {user.username}
              </NavbarText>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
