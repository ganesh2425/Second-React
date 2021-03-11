import React from 'react';
import ContactApp from "./Axios-HTTP/ContactApp";

function App() {
    return (
    <>
        <nav className="navbar navbar-dark bg-dark">
            <a href="/">React ListRendering example with Axios-HTTP</a>
            </nav>
            <ContactApp/>       
    </>
    )
}

export default App
