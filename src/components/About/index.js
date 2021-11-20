import React from "react";
import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import { MDBJumbotron, MDBBtn, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const About = () => {
  return (
      <Container id="about">
          <MDBJumbotron style={{ padding: 0 ,margin: 0}}>
            <MDBCol className="text-center py-5 px-5 my-0" style={{ backgroundColor: "#F9EAEE"}}>
              <MDBCol className="py-5" style={{backgroundImage :'url(https://images.squarespace-cdn.com/content/v1/5330ff05e4b019aa670599d3/1557968882972-15SCGMF2O58IOI4U5491/ke17ZwdGBToddI8pDm48kLnfZvQ9iwxKU6eubAUQjId7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZu4EA4VkQXskbAiP4Lo2GV8HD7TW41NQmswmX4LjmCLoRwB-dUGsSquCnVTFQcaRg/3.png?format=500w)',backgroundRepeat:'no-repeat'}}>
              <Fade right>                 
                <MDBCardTitle className="h1-responsive pt-5 m-5 font-bold" style={{color: "#000",fontSize:"50px"}}>Who We Are</MDBCardTitle>
              </Fade>
                <Fade left>
                <p className="mx-5 mb-5" style={{color: "#000",fontSize:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                </p>
                </Fade>
                <MDBBtn outline color="black" className="mb-3" style={{fontSize:"25px"}} onClick={() => {window.location.href="/aboutus"}}><MDBIcon icon="book-open" className="mr-2"></MDBIcon>Learn More</MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
          </Container>
  )
}

export default About;