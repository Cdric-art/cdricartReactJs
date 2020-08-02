import React from 'react';

class Navbar extends React.Component {
    render () {
        return (
            <nav className="Navbar">

                <ul>
                    <li><a href="#about">About me</a></li>
                    <li><a href="#skills">My skills</a></li>
                    <li><a href="#projets">My projects</a></li>
                    <li><a href="#contact">Contact me</a></li>
                </ul>

            </nav>
        )
    }
}

export default Navbar;