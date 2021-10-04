import React from 'react';
import Menu from "../Menu/Menu";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div>
            <Menu></Menu>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;