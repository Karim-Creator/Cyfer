import React from "react";
import Fade from 'react-reveal/Fade';
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { FaAngleUp,FaAngleDown } from 'react-icons/fa'
import { MDBBtn, MDBCol, MDBInput, MDBIcon, MDBRow, MDBContainer } from "mdbreact";

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const Contact = () => {
  return (
    <Container id="contact" style={{ backgroundColor: "#F9EAEE",paddingBottom:"100px"}}>
    {/* <Link style={{alignItems:'center',display:'flex',justifyContent: 'center'}} activeClass="active" to="blog" spy={true} smooth={true} duration={1000}>
              <FaAngleUp style={{color: "#000",fontSize:"50px"}}/>
    </Link> */}
    <MDBContainer>
    <MDBRow  className="py-2">
      <MDBCol md="6" className="mt-5 px-5 my-0" style={{ backgroundImage :'url(https://images.squarespace-cdn.com/content/v1/5330ff05e4b019aa670599d3/1557968912667-RRSVXS41TZRVWM11FCUF/ke17ZwdGBToddI8pDm48kLnfZvQ9iwxKU6eubAUQjId7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UZu4EA4VkQXskbAiP4Lo2GV8HD7TW41NQmswmX4LjmCLoRwB-dUGsSquCnVTFQcaRg/5.png?format=750w)',backgroundRepeat:'no-repeat'}}>
        <form style={{fontSize: "20px"}}>
        <Fade right>
          <p className="h5 text-center mb-4" style={{fontSize: "30px"}}>Feel Free To Swing By For a Coffee, Or Leave Us a Message</p>
          <hr/>
        </Fade>
        <Fade left>
          <div className="black-text">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In neque quidem ipsam corrupti perferendis sit, soluta ex nam earum sunt nihil quia non magnam iusto impedit fuga distinctio aliquid corporis.</p>
          </div>
          <div className="black-text">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In neque quidem ipsam corrupti perferendis sit, soluta ex nam earum sunt nihil quia non magnam iusto impedit fuga distinctio aliquid.</p>
          </div>
          </Fade>
        </form>
      </MDBCol>
      <MDBCol md="6" className="mt-5" >
        <Fade right>
        <form>
          <p className="h5 text-center mb-4" style={{fontSize: "30px"}}>Write to us</p>
          <div className="grey-text">
            <MDBInput label="Your name" icon="user" group type="text" validate error="wrong"
              success="right" />
            <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong"
              success="right" />
            <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
            <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
          </div>
          <div className="text-center mb-5">
            <MDBBtn outline color="dark">
              Send
              <MDBIcon far icon="paper-plane" className="ml-1" />
            </MDBBtn>
          </div>
        </form>
        </Fade>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  </Container>
  )
}

export default Contact;