import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {CartContext} from '../contexts/Cart'

const TopMenu = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand>
            <Link to="/">reactstrap</Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/">Home</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/products">Products</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>

                <CartContext.Consumer>

                  {({cartItems}) => 
                    <Link to="/products">
                      Cart ({cartItems.length})
                    </Link>
                  }
                  
                </CartContext.Consumer>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

  );
};

export default TopMenu;
