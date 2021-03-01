import React, {useState} from 'react';

import Pineapple from '../assets/images/pineapple.png';
import Recipes from '../assets/images/recipe.png';
import Artiste from '../assets/images/artiste.png';
import Weather from '../assets/images/weather.png';

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
                    <span/>
                    <p>FullStack JS</p>
                </div>
                <div className="project-item" data-index={1} onClick={handleDetail}>
                    <img src={Recipes} alt="Project Recipes App"/>
                    <h3>RECIPES APP</h3>
                    <span/>
                    <p>FullStack JS</p>
                </div>
                <div className="project-item" data-index={2} onClick={handleDetail}>
                    <img src={Artiste} alt="Project Wp-React"/>
                    <h3>ARTISTE</h3>
                    <span/>
                    <p>Wordpress - React Js</p>
                </div>
                <div className="project-item" data-index={3} onClick={handleDetail}>
                    <img src={Weather} alt="Project Weather App"/>
                    <h3>WEATHER APP</h3>
                    <span/>
                    <p>React Js</p>
                </div>
            </div>
            <div onClick={() => setShowDetails(false)} className={showDetails ? 'wrapper-details active' : 'wrapper-details'}>
                {index === 0 ? (
                    <div className="detail-body">
                        Pineapple
                    </div>
                ) : index === 1 ? (
                    <div className="detail-body">
                        Recipe
                    </div>
                ) : index === 2 ? (
                    <div className="detail-body">
                        Artiste
                    </div>
                ) : index === 3 ? (
                    <div className="detail-body">
                        Weather
                    </div>
                ) : null}
            </div>
        </section>
    );
};


export default Project;
