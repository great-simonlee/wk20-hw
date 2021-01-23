import React from 'react';
import Header from "../components/Header"
import Intro from "../components/Intro"
import About from "../components/About"
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Main =(props) =>{
    return (
        <div>
            <Header />
            <Intro/>
            <About/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Main;