import React from 'react'
import { MDBInputGroup } from 'mdbreact';
import styled from 'styled-components';

const Container = styled.div`
    background: #F9EAEE;
    padding-top: 120px;
`
const EmailH1 = styled.div`
    color: #fff;
    font-size: 20px;
`

const EmailBtn = styled.button `
    background: #000;
     color: #fff;
     cursor: pointer;
     border: none;
     outline: none;
     white-space: nowrap;
`

const Email = () => {
    return (
        <>
            <Container >
                <EmailH1 className="black-text text-center">
                Ready to watch? Enter your email to create or restart your membership.
                </EmailH1>
            <MDBInputGroup
          hint="Email Address"
          style= {{width: "70%"}}
          containerClassName="mb-0 pb-5 mt-4 mx-auto"
          className= "py-4"
          append={
            <>
              <EmailBtn
              color="red"
              className="m-0 px-4 z-depth-0"
            >
              Get Started
            </EmailBtn>
            </>
          }
        />
      </Container>
        </>
    )
}

export default Email
