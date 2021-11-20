import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Email from '../components/Email'
import Contact from '../components/Contact'
import ScrollToTop from '../components/ScrollToTop'
import Faq from '../components/FAQ'

const ContactUs = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Contact />
            <Faq />
            <Email />
            <Footer />
        </>
    )
}

export default ContactUs
