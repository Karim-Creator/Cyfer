import React, { Component } from "react";
import styled from 'styled-components'
import {Fade} from 'react-reveal'
import { MDBBtn, MDBCollapse, MDBContainer } from "mdbreact";

const Container = styled.div`
    width: 100%;
    height: 100%;
`
const FAQH1 = styled.h1`
    color:'#000';
    font-size: 50px;
    padding-bottom: 40px;

`

class Faq extends Component {
state = {
  collapseID: ""
}

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));
}

render() {
  return (
      <>
      <Container className="text-center" style={{backgroundColor:'#F9EAEE',width:'100%'}}>
      <FAQH1>frequently asked questions</FAQH1>
    <MDBBtn
      color="black"
      onClick={this.toggleCollapse("1")}
      style={{ marginBottom: "2rem",fontSize:'20px'}}
    >
      What Is This Site About ?
    </MDBBtn>
    <MDBBtn
      color="black"
      onClick={this.toggleCollapse("2")}
      style={{ marginBottom: "2rem",fontSize:'20px' }}
    >
      How To Join Us ?
    </MDBBtn>
    <MDBBtn
      color="black"
      onClick={this.toggleCollapse("3")}
      style={{ marginBottom: "2rem",fontSize:'20px' }}
    >
      I Forgot My Email
    </MDBBtn>
    <MDBBtn
      color="black"
      onClick={this.toggleCollapse("4")}
      style={{ marginBottom: "2rem",fontSize:'20px'}}
    >
      I Forgot My Password
    </MDBBtn>
        <MDBCollapse id="1" isOpen={this.state.collapseID} style={{backgroundColor:'#E2DBDD'}}>
          <p style={{padding:'25px 25px',marginBottom: '0',fontSize:'25px',width:'100%'}} className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>
        </MDBCollapse>
        <MDBCollapse id="2" isOpen={this.state.collapseID} style={{backgroundColor:'#E2DBDD'}}>
          <p style={{padding:'25px 25px',marginBottom: '0',fontSize:'25px',width:'100%'}} className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
        </MDBCollapse>
        <MDBCollapse id="3" isOpen={this.state.collapseID} style={{backgroundColor:'#E2DBDD'}}>
          <p style={{padding:'25px 25px',marginBottom: '0',fontSize:'25px',width:'100%'}} className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum dolor minima facere dolore veritatis. 
            Expedita aliquid magni reprehenderit, corrupti vitae totam inventore animi at obcaecati commodi 
            adipisci accusamus praesentium amet.
          </p>
        </MDBCollapse>
        <MDBCollapse id="4" isOpen={this.state.collapseID} style={{backgroundColor:'#E2DBDD'}}>
          <p style={{padding:'25px 25px',marginBottom: '0',fontSize:'25px',width:'100%'}} className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
        </MDBCollapse>
        <MDBCollapse id="basicCollapse" isOpen={this.state.collapseID} style={{backgroundColor:'#E2DBDD'}}>
          <p style={{padding:'25px 25px',marginBottom: '0',fontSize:'25px',width:'100%'}} className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos eaque numquam. 
            Ullam itaque, eum explicabo aperiam ipsa maxime 
            nam quae velit rem architecto laboriosam accusantium, iure molestias ipsum nulla!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur omnis, nihil voluptas tenetur 
            explicabo ducimus eveniet repellat ut suscipit hic nobis vitae perspiciatis 
            facere ipsa ea, deserunt necessitatibus quod aliquam.
          </p>
        </MDBCollapse>
        
        </Container>
      </>
    );
  }
}

export default Faq;