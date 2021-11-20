import React from 'react';
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBContainer,MDBNavLink } from 'mdbreact';
import { BrowserRouter as Router,Link,Redirect } from 'react-router-dom';
import { NavbarBrand,NavbarBtn,NavItem } from './NavbarElements';
import fire from '../../fire'

class Navbar extends React.Component {

  state = {
    redirect: false
  }
  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/signup'/>
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      user: null,
    };
    this.onClick = this.onClick.bind(this);
    this.logout= this.logout.bind(this);
    this.authListener = this.authListener.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  logout = () => {
    fire.auth().signOut();
    return <Redirect to={this.state.redirect} />
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div>
        <Router>
          <header>
          <MDBNavbar dark expand="md" scrolling sticky="top"  style={{background:"#F9EAEE",height:"70px"}}>
                <MDBContainer>
                  <NavbarBrand href="/">
                    <Link to={'/'} className="nav-link" onClick={() => {window.location.href="/"}} style={{color: "#000",letterSpacing:"5px"}}> Cyfer </Link>
                  </NavbarBrand>
                  <MDBNavbarToggler onClick={this.onClick}/>
                  <MDBCollapse isOpen={this.state.collapse} navbar style={{backgroundColor:"#F9EAEE"}}>
                    <MDBNavbarNav right>
                    <NavItem>
                      <MDBNavLink style={{color: "#000"}} onClick={() => {window.location.href="/"}} to="/" active>Home</MDBNavLink>
                    </NavItem>
                    <NavItem>
                    <Link to={'/aboutus'} style={{color: "#000"}} onClick={() => {window.location.href="/aboutus"}} className="nav-link"> About </Link>
                    </NavItem>
                    <NavItem>
                      <MDBNavLink style={{color: "#000"}} onClick={() => {window.location.href="/blog"}} to="/blog">Blog</MDBNavLink>
                    </NavItem>
                    <NavItem>
                      <MDBNavLink style={{color: "#000"}} onClick={() => {window.location.href="/contact"}} to="/contact">Contact</MDBNavLink>
                    </NavItem>
                      <MDBNavItem>
                        {/* Change Button Deppending On User Status (loggedIn/LoggedOut) */}
                        {this.renderRedirect()}
                        {this.state.user ? (
                          <div>
                            <NavbarBtn >
                            <Link onClick={() => {this.logout(),window.location.href="/signup"}} to="/signup" className="nav-link"> Logout </Link>
                            </NavbarBtn>
                          </div>
                        ) : (
                          <NavbarBtn >
                            <Link onClick={() => {window.location.href="/signup"}} to="/signup" className="nav-link"> Login </Link>
                          </NavbarBtn>
                        )}
                      </MDBNavItem>
                    </MDBNavbarNav>
                  </MDBCollapse>
                </MDBContainer>
              </MDBNavbar>
        </header>
          </Router>
      </div>
    );
  }
}

export default Navbar;