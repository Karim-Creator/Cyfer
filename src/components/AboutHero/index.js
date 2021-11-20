import React from 'react'
import { Link } from 'react-scroll';
import { IconContext } from "react-icons";
import { FaAngleDown } from 'react-icons/fa'
import { MDBView, MDBMask} from 'mdbreact';
import HeroImage from '../../images/HeroImage.jpg'
import {MDBH2,MDBP,Container,GoBtn} from './AboutHeroElements'

const AboutHero = () => {
    return (
        <>
            <Container id="home">
            <MDBView src={HeroImage}>
            <MDBMask overlay="red-slight" className="flex-center flex-column text-white text-center">
              <MDBH2>Find Out</MDBH2>
              <MDBH2>More About Us.</MDBH2>
              <MDBP>Feel Free To Leave Us a Message Here.</MDBP>
              <IconContext.Provider value={{ style:{ color: "#000"}}}>
              <GoBtn onClick={() => {window.location.href="/contact"}} to="/blog">Leave Us a Message</GoBtn>
                <Link activeClass="active" to="1" spy={true} smooth={true} duration={1000}>
                <FaAngleDown style={{color: "#fff",fontSize:"50px",marginTop:"100px"}} />
                </Link>
              </IconContext.Provider>
            </MDBMask>
          </MDBView>
          </Container>

        </>
    )
}

export default AboutHero
