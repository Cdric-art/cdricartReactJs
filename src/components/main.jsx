import React from 'react';
import Navbar from '../components/navbar'
import Aboutme from '../components/aboutme';
import Skills from '../components/skills';

function Main () {
    return (
        <div className="Main">

            <Navbar />
            <Aboutme />
            <Skills />

        </div>
    )
}

export default Main;