import React from 'react';
import Linkedin from '../imgs/linkedin.png';
import Github from '../imgs/github.png';
import Twitter from '../imgs/twitter.png';

function Footer () {

    return (
        <div id="contact" className="Footer">
            <div className="info">
                <h3>Evrard Cédric</h3>
                <a href="mailto:cdric.art@gmail.com">cdric.art@gmail.com</a>
                <p>06.61.39.36.55</p>
            </div>
            <div className="reseau">
                <div className="linkedin">
                    <a href="https://www.linkedin.com/in/cdricart/" target="_blank">
                        <img src={ Linkedin } alt="Icon Linkedin"/>
                    </a>
                </div>
                <div className="github">
                    <a href="https://github.com/Cdric-art" target="_blank">
                        <img src={ Github } alt="Icon Github"/>
                    </a>
                </div>
                <div className="twitter">
                    <a href="https://twitter.com/Cdric_art" target="_blank">
                        <img src={ Twitter } alt="Icon Twitter"/>
                    </a>
                </div>
            </div>
            <div className="copy">
                <p>&copy; Created by Cdric_art</p>
                <p>August 2020</p>
            </div>
        </div>
    )

}

export default Footer;