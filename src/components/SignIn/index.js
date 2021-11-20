import React, { Component } from "react";
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import fire from '../../fire'

const Container = styled.div`
    width: 100%;
    height: 100%;
`


class SignIn extends Component {


  render(){
  return (
    <Container style={{backgroundColor:'#F9EAEE'}}>
    <MDBContainer className="mt-0 mb-4" >
      <MDBRow className="justify-content-md-center">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4" style={{fontSize:'40px'}}>Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Your name"
                    icon="user"
                    group
                    type="text"
                    required
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    required
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    required
                  />
                  <MDBInput
                    label="Confirm password"
                    icon="lock"
                    group
                    type="password"
                    required
                  />
                </div>
                <div className="text-center py-4 mt-2">
                  <MDBBtn style={{fontSize:'20px'}} color="cyan" type="submit">
                    Register
                  </MDBBtn>
                  <p style={{fontSize:'20px'}} className="mt-3">Your Already Have Account? Login Here <Link onClick={() => {window.location.href="signup"}} to="/signup">Here</Link></p>
                  <Link style={{fontSize:'20px'}} to="/" onClick={() => {window.location.href="/"}}>Home</Link>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </Container>
  );
};
}

export default SignIn;