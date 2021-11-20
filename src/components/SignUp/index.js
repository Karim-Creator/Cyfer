import React, { Component } from "react";
import styled from 'styled-components'
import { Link,Redirect  } from 'react-router-dom'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody,MDBInput } from 'mdbreact';
import fire from "../../fire";

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

const authentication={
  isLoggedIn: false,
  onAuthentication(){
    this.isLoggedIn = true;
  },
  getLogInStatus(){
    return this.isLoggedIn();
  }
}

class SignUp extends Component {
  
  /* Redirect User After Login To HomePage */
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
      return <Redirect to='/'/>
    }
  }
  
  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
        
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
        /*When User Login Send Him To HomePage*/
        this.setState({ redirect: "/" });
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  render(){
  return (
    <Container style={{backgroundColor:'#F9EAEE'}} className="pt-5 pb-5">
    <MDBContainer >
      <MDBRow className="justify-content-md-center pt-5">
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4" style={{fontSize:'40px'}}>Sign Up</p>
                <div className="grey-text">
                  <MDBInput
                    id="email"
                    label="Your Email"
                    icon="user"
                    type="text"
                    required
                  />
                  </div>
                <div className="grey-text">
                  <MDBInput
                    id="password"
                    label="Your Password"
                    icon="lock"
                    type="password" 
                    required
                  />
                  </div>
                <div className="text-center py-4 mt-0">
                {this.renderRedirect()}
                <MDBBtn style={{fontSize:'15px'}} color="cyan" onClick={() => {
                  this.login();
                }}>
                  Login
                </MDBBtn>
                <MDBBtn style={{fontSize:'15px'}} color="cyan" onClick={() => {this.signUp();this.login()}}>
                    Register
                </MDBBtn>
                <p style={{fontSize:'20px',padding:'10px'}} className="mt-3">If You Don't Have An Account, Please Enter An Email/Password Then Click On Register Then You Can Login.</p>
                Go Back <Link style={{fontSize:'20px',textDecorationLine: 'underline'}} to="/" onClick={() => {window.location.href="/"}}>Home</Link>
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

export default SignUp;