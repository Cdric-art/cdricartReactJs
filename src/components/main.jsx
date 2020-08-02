import React from 'react';
import Navbar from '../components/navbar'
import Aboutme from '../components/aboutme';
import Skills from '../components/skills';
import Project from './project';

function Main () {
    return (
        <div className="Main">

            <Navbar />
            <Aboutme />
            <Skills />
            <Project />

        </div>
    )
}

export default Main;