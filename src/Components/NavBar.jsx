import React from 'react';
import Navbar from 'react-bootstrap/Navbar';



const NavBar = () => {
    return (
        <>
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#" className="justify-content-center">
                            <center>
                            CGPA Counter
                            </center>
                    </Navbar.Brand>
                </Navbar>
            </div>
        </>
    );
}

export default NavBar;