import React, {useState} from 'react';

import Pineapple from '../assets/images/pineapple.png';
import Pineapple1 from '../assets/images/pineapple1.png';
import Pineapple2 from '../assets/images/pineapple2.png';
import Pineapple3 from '../assets/images/pineapple3.png';
import Whire from '../assets/images/whire.png';
import Artiste from '../assets/images/artiste.png';
import Weather from '../assets/images/weather.png';
import Close from '../assets/icons/close.png';

const Project = () => {

    const [showDetails, setShowDetails] = useState(false)
    const [index, setIndex] = useState(null)

    const handleDetail = (e) => {
        if (showDetails) {
            setIndex(parseInt(e.target.dataset.index))
        } else {
            setIndex(parseInt(e.target.dataset.index))
            setShowDetails(!showDetails)
        }
    }

    return (
        <section className="projects">
            <div className={showDetails ? 'wrapper-projects active' : 'wrapper-projects'}>
                <div className="project-item" data-index={0} onClick={handleDetail}>
                    <img src={Pineapple} alt="Project Pineapple"/>
                    <h3>PINEAPPLE</h3>
                    <span className="hr-blue"/>
                    <p>FullStack JS</p>
                </div>
                <div className="project-item" data-index={1} onClick={handleDetail}>
                    <img src={Whire} alt="Project Whire"/>
                    <h3>Whire</h3>
                    <span className="hr-blue"/>
                    <p>React JS</p>
                </div>
                <div className="project-item" data-index={2} onClick={handleDetail}>
                    <img src={Artiste} alt="Project Wp-React"/>
                    <h3>ARTISTE</h3>
                    <span className="hr-blue"/>
                    <p>Wordpress - React JS</p>
                </div>
                <div className="project-item" data-index={3} onClick={handleDetail}>
                    <img src={Weather} alt="Project Weather App"/>
                    <h3>WEATHER APP</h3>
                    <span className="hr-blue"/>
                    <p>React JS</p>
                </div>
            </div>
            <div onClick={() => setShowDetails(false)} className={showDetails ? 'wrapper-details active' : 'wrapper-details'}>
                {index === 0 ? (
                    <>
                        <div className="detail-header">
                            <img src={Close} alt="Close"/>
                            <h3>Pineapple</h3>
                        </div>
                        <div className="detail-body">
                            <div className="images">
                                <img src={Pineapple1} alt="Pineapple 1"/>
                                <img src={Pineapple2} alt="Pineapple 2"/>
                                <img src={Pineapple3} alt="Pineapple 3"/>
                            </div>
                            <div className="text">
                                <div className="description">
                                    <h3>Description</h3>
                                    <span className="hr-blue"/>
                                    <p>Bla</p>
                                </div>
                                <div className="infosup">
                                    <h3>Infos</h3>
                                    <span className="hr-blue"/>
                                </div>
                            </div>
                        </div>
                    </>
                ) : index === 1 ? (
                    <>
                        <div className="detail-header">
                            <img src={Close} alt="Close"/>
                            <h3>Whire</h3>
                        </div>
                        <div className="detail-body">

                        </div>
                    </>
                ) : index === 2 ? (
                    <>
                        <div className="detail-header">
                            <img src={Close} alt="Close"/>
                            <h3>Artiste</h3>
                        </div>
                        <div className="detail-body">

                        </div>
                    </>
                ) : index === 3 ? (
                    <>
                        <div className="detail-header">
                            <img src={Close} alt="Close"/>
                            <h3>Weather App</h3>
                        </div>
                        <div className="detail-body">

                        </div>
                    </>
                ) : null}
            </div>
        </section>
    );
};


export default Project;
