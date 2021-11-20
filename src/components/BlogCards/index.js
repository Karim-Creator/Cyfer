import React, { Component } from "react";
import {MDBRow, MDBCol, MDBView, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText,MDBCardGroup } from "mdbreact";
import { Container,MDBH2 } from './BlogCardsElements'

class BlogCards extends Component {
  render() {
    return (
      <Container style={{backgroundColor:'#F9EAEE'}}>
          <MDBH2 className="text-center mb-5">Discover</MDBH2>
        <MDBRow>
          <MDBCol lg="6" className="mb-3">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Others/documentation/img%20(1)2-mini.jpg" className="img-fluid" alt="" />
            </MDBView>
          </MDBCol>
          <MDBCol lg="6">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Others/documentation/img%20(7)-mini.jpg" className="img-fluid" alt="" />
            </MDBView>
          </MDBCol>
        </MDBRow>
        <MDBRow className='mt-5'>
          <MDBCol lg="6" className="mb-3">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Others/documentation/img(129)-mini.jpg" className="img-fluid" alt="" />
            </MDBView>
          </MDBCol>
          <MDBCol lg="6">
            <MDBView waves>
              <img src="https://mdbootstrap.com/img/Others/documentation/img(118)-mini.jpg" className="img-fluid" alt="" />
            </MDBView>
          </MDBCol>
        </MDBRow>


    <MDBH2 className="text-center mt-5 mb-5">Blogs</MDBH2>
    <MDBCardGroup >
      <MDBCard className="mr-2">
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Nature</MDBCardTitle>
          <MDBCardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque quasi neque repellat esse, provident pariatur ipsum dolore rem, eligendi beatae tempora tenetur animi inventore ipsa quisquam, vero fugiat harum?
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="mr-2">
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Sunset</MDBCardTitle>
          <MDBCardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque quasi neque repellat esse, provident pariatur ipsum dolore rem, eligendi beatae tempora tenetur animi inventore ipsa quisquam, vero fugiat harum?
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="mr-2">
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/77.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Mother Nature</MDBCardTitle>
          <MDBCardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque quasi neque repellat esse, provident pariatur ipsum dolore rem, eligendi beatae tempora tenetur animi inventore ipsa quisquam, vero fugiat harum?
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>


    <MDBCardGroup className="mt-5">
      <MDBCard className="mr-2">
        <MDBCardImage src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Technology</MDBCardTitle>
          <MDBCardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque quasi neque repellat esse, provident pariatur ipsum dolore rem, eligendi beatae tempora tenetur animi inventore ipsa quisquam, vero fugiat harum?
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="mr-2">
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Random</MDBCardTitle>
          <MDBCardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque quasi neque repellat esse, provident pariatur ipsum dolore rem, eligendi beatae tempora tenetur animi inventore ipsa quisquam, vero fugiat harum?
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className="mr-2">
        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg" alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Food</MDBCardTitle>
          <MDBCardText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi itaque quasi neque repellat esse, provident pariatur ipsum dolore rem, eligendi beatae tempora tenetur animi inventore ipsa quisquam, vero fugiat harum?
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
      </Container>
    );
  }
}

export default BlogCards;