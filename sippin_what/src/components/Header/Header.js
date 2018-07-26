import React from "react";
import {Navbar, NavItem} from 'react-materialize'
import "./Header.css";

const Header = props => (
 
<div>
<Navbar className="navBar" brand='Sippin What' href='/'right>
  <NavItem href='/about'>Meet the Team</NavItem>
  <NavItem href='/contact'>Contact Us</NavItem>
  <NavItem href='/login'>Login</NavItem>
</Navbar>

</div>
)

export default Header;