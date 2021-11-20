import React from "react";
import { FaFacebookF,FaInstagram,FaLinkedin,FaTwitterSquare} from "react-icons/fa"
import { MDBContainer, MDBRow, MDBFooter,MDBNavLink } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter className="pt-5" style={{backgroundColor:'#F9EAEE',fontSize:'20px'}}>
      <MDBContainer fluid className="text-center text-md-left mt-5 mb-5">
        <MDBRow className="center" style={{justifyContent:'center'}}>
              <MDBNavLink style={{color: "#000",textDecorationLine: 'underline'}} to="/">Home</MDBNavLink>
              <MDBNavLink style={{color: "#000",textDecorationLine: 'underline'}} to="aboutus">About</MDBNavLink>
              <MDBNavLink style={{color: "#000",textDecorationLine: 'underline'}} to="blog">Blog</MDBNavLink>
              <MDBNavLink style={{color: "#000",textDecorationLine: 'underline'}} to="contact">Contact</MDBNavLink>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-2" style={{backgroundColor:'#F9EAEE'}}>
        <MDBContainer fluid style={{marginBottom:'150px',backgroundColor:'#F9EAEE'}}>
        <MDBRow className="center" style={{justifyContent:'center'}}>
        <MDBNavLink style={{color: "#4867AA"}} to="#">
        <FaFacebookF to="#" />       
        </MDBNavLink>
        <MDBNavLink style={{color: "#CA32A9"}} to="#">
        <FaInstagram to="#" />       
        </MDBNavLink>
        <MDBNavLink style={{color: "#0077B5"}} to="#">
        <FaLinkedin to="#" />       
        </MDBNavLink>
        <MDBNavLink style={{color: "#0077B5"}} to="#">
        <FaTwitterSquare to="#" />       
        </MDBNavLink>
        </MDBRow>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;