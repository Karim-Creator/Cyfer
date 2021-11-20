import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Email from '../components/Email'
import AboutUs from '../components/AboutUs'
import AboutHero from '../components/AboutHero'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/AboutUs/Data'
import ScrollToTop from '../components/ScrollToTop'

class AboutUsPage extends Component {
    render(){
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <AboutHero />
            <AboutUs {...homeObjOne} />
            <AboutUs {...homeObjTwo} />
            <AboutUs {...homeObjThree} />
            <Email />
            <Footer />
        </>
    )
}
}

export default AboutUsPage
