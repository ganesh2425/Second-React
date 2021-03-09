import React from 'react'
import "./App.css";
import Navbar from "./React-Website/Navbar";
import LandingPage from "./React-Website/LandingPage";
import Cards from "./React-Website/Cards";
import InfoBox from "./React-Website/InfoBox";
import Contact from "./React-Website/Contact";
import Footer from "./React-Website/Footer";

function App() {
    return (
        <>
            <Navbar/>
            <LandingPage/>
            <Cards/>
            <InfoBox/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App
