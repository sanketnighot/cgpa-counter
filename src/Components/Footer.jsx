import React from 'react';
import Navbar from 'react-bootstrap/Navbar';



const Footer = () => {
    return (
        <>
            <div>
                <Navbar bg="dark" variant="dark" fixed="bottom">
                    <center>
                        <div style={{color : "white", }}>
                            <a href="http://linkedin.com/in/sanket-nighot" target="_blank"  rel="noreferrer">  @sanketnighot </a> &nbsp; &nbsp; &nbsp; &nbsp; 
                        </div>
                    </center>
                </Navbar>
            </div>
        </>
    );
}

export default Footer;