import React from 'react';
import Linkedin from '../imgs/linkedin.png';
import Github from '../imgs/github.png';
import Twitter from '../imgs/twitter.png';
import ArrowUp from '../imgs/arrow.png';
import ContactMe from "./contactMe";

class Footer extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
        }
    }

    showModal = () => {
        this.setState({
            visible: true
        })
    }

    hideModal = () => {
        this.setState({
            visible: false
        })
    }

    render() {

        const Modal = this.state.visible && <ContactMe close={ this.hideModal } />

        return (
            <div id="contact" className="Footer">
                <div className="info">
                    <h3>Evrard Cédric</h3>
                    <a href="mailto:cdric.art@gmail.com">cdric.art@gmail.com</a>
                    <button onClick={ this.showModal } className="btn-modal">Écrivez-moi</button>
                    { Modal }
                </div>
                <div className="reseau">
                    <div className="linkedin">
                        <a href="https://www.linkedin.com/in/cdricart/" rel="noopener noreferrer" target="_blank">
                            <img src={ Linkedin } alt="Icon Linkedin"/>
                        </a>
                    </div>
                    <div className="github">
                        <a href="https://github.com/Cdric-art" rel="noopener noreferrer" target="_blank">
                            <img src={ Github } alt="Icon Github"/>
                        </a>
                    </div>
                    <div className="twitter">
                        <a href="https://twitter.com/Cdric_art" rel="noopener noreferrer" target="_blank">
                            <img src={ Twitter } alt="Icon Twitter"/>
                        </a>
                    </div>
                </div>
                <div className="arrow-up">
                    <a href={"index.html"}>
                        <img src={ ArrowUp } alt="Arrow Up"/>
                    </a>
                </div>
                <div className="copy">
                    <p>&copy; Created by Cdric_art</p>
                    <p>August 2020</p>
                </div>
            </div>
        );
    }

}

export default Footer;