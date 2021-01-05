import React from 'react'
import NavBar from "./NavBar"
import CarouselF from "./Carousel"
import AboutMe from "./AboutMe";
import LatestProject from "./LatestProject";
import Footer from "./Footer";

function Homepage() {
    return (
        <div>
            <NavBar />
            <CarouselF />
            <AboutMe />
            <LatestProject />
            <Footer />
        </div>
    )
}

export default Homepage
