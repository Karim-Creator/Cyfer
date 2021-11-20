import React, { Component } from "react";
import { Link } from 'react-scroll';
import { IconContext } from "react-icons";
import { FaAngleDown } from 'react-icons/fa'
import {MDBView,MDBMask} from "mdbreact";
import {GoBtn,MDBH2,MDBP} from './BlogHeroElements'
import BlogImage from '../../images/BlogImage.jpg'


class BlogHero extends Component {
  render() {
    return (
            <MDBView src={BlogImage}>
            <MDBMask overlay="red-slight" className="flex-center flex-column text-white text-center">
              <MDBH2>Everything Has a Start</MDBH2>
              <MDBP>You Just Need a Pen To Create It.</MDBP>
              <MDBP>Feel Free To Check Out Our Blogs</MDBP>
              <IconContext.Provider value={{ style:{ color: "#000"}}}>
              <GoBtn onClick={() => {window.location.href="/aboutus"}} to="/blog">Learn More</GoBtn>
                <Link activeClass="active" to="1" spy={true} smooth={true} duration={1000}>
                <FaAngleDown style={{color: "#fff",fontSize:"50px",marginTop:"100px"}} />
                </Link>
              </IconContext.Provider>
            </MDBMask>
          </MDBView>
    );
  }
}

export default BlogHero;