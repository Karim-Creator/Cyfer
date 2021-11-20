import React from "react";
import { Link } from 'react-scroll'
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem } from "mdbreact";

const SideNav = () => {
    return (
  <BrowserRouter>
    <MDBNav className="nav-pills nav-fill">
      <MDBNavItem style={{backgroundColor: '#EBDDF0',height:'40px'}}>
        <Link to="#!" style={{backgroundColor: '#EBDDF0',color:'#000',fontSize:'20px'}} activeClass="active" to="1" spy={true} smooth={true} duration={1000}>Who We Are</Link>
      </MDBNavItem>
      <MDBNavItem style={{backgroundColor: '#EBDDF0'}}>
        <Link to="#!" style={{backgroundColor: '#EBDDF0',color:'#000',fontSize:'20px'}} activeClass="active" to="2" spy={true} smooth={true} duration={1000}>Our Story</Link>
      </MDBNavItem>
      <MDBNavItem style={{backgroundColor: '#EBDDF0'}}>
        <Link to="#!" style={{backgroundColor: '#EBDDF0',color:'#000',fontSize:'20px'}} activeClass="active" to="3" spy={true} smooth={true} duration={1000}>Our Process</Link>
      </MDBNavItem>
    </MDBNav>
  </BrowserRouter>
);
}

export default SideNav;