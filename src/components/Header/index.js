import React from 'react';
import { MDBNavbar, MDBContainer } from 'mdbreact';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import { NavbarBrand } from './HeaderElements';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <Router>
          <header>
          <MDBNavbar dark expand="md" scrolling sticky="top"  style={{background:"#F9EAEE",height:"70px"}}>
                <MDBContainer className="justify-content-md-center" >
                  <NavbarBrand href="/" style={{color: "#000",letterSpacing:"5px"}}>
                    Cyfer 
                  </NavbarBrand>
                </MDBContainer>
              </MDBNavbar>
        </header>
          </Router>
      </div>
    );
  }
}

export default Navbar;