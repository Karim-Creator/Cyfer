import React from 'react'
import { Link } from 'react-scroll';
import { IconContext } from "react-icons";
import { FaAngleDown } from 'react-icons/fa'
import { MDBView, MDBMask} from 'mdbreact';
import {MDBH2,MDBP,Container,GoBtn} from './HeroElements'

const Hero = () => {
    return (
        <>
            <Container id="home">
            <MDBView src="https://images.squarespace-cdn.com/content/v1/5330ff05e4b019aa670599d3/1558121775711-BWD8UOMBA3WU5DMHLORO/ke17ZwdGBToddI8pDm48kI-1M6BwWxI5lGlAvJI7ynoUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dnp_m8Wyva9tPkovPg1IjuNpEQWkLYOvs9Q3XtmK-uHHCjLISwBs8eEdxAxTptZAUg/ATPP_Homepage-Header_3.png?format=1500w">
            <MDBMask overlay="red-slight" className="flex-center flex-column text-white text-center">
              <MDBH2>Where Good Ideas </MDBH2>
              <MDBH2>Find You.</MDBH2>
              <MDBP>Read Anywhere, Anytime.</MDBP>
              <IconContext.Provider value={{ style:{ color: "#000"}}}>
              <GoBtn onClick={() => {window.location.href="/blog"}} to="/blog">Checkout Our Blogs</GoBtn>
                <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000}>
                <FaAngleDown style={{color: "#fff",fontSize:"50px",marginTop:"100px"}} />
                </Link>
              </IconContext.Provider>
            </MDBMask>
          </MDBView>
          </Container>

        </>
    )
}

export default Hero
