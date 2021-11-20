import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Email from '../components/Email'
import BlogPage from '../components/BlogPage'
import BlogHero from '../components/BlogHero'
import BlogCards from '../components/BlogCards'
import ScrollToTop from '../components/ScrollToTop'

const Blog = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <BlogHero />
            <BlogPage />
            <BlogCards />
            <Email />
            <Footer />
        </>
    )
}

export default Blog
