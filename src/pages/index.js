import React from 'react'
import About from '../components/About'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Email from '../components/Email'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'

const Home = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Hero />
            <About />
            <Blog />
            <Contact />
            <Email />
            <Footer />
        </>
    )
}

export default Home
