import React from 'react';
import Arrow from '../imgs/arrow.png';
import Card3d from '../imgs/card3d.gif';
import Fiasco from '../imgs/fiasco.gif';
import Reseau from '../imgs/reseau.gif';

class Project extends React.Component {

    constructor (props) {
        super(props)

    }

    render () {

        return (
            <div id="projets">
                <div className="arrow">
                    <img src={ Arrow } alt="Arrow right"/>
                </div>
                <div>
                    <div id="projet1" className="wrapper-projets">
                        <div className="projet">
                            <img src={ Fiasco } alt="Projet 1"/>
                        </div>
                        <div className="text">
                            <p>
                            <span>Création du Front-End</span> d'un site entièrement responsive
                            pour un restaurant. Ce projet est une création proposée à 
                            l'issue d'une <span>formation de Grafikart.</span>
                            </p>
                        </div>
                    </div>
                    <div id="projet2" className="wrapper-projets projet-none">
                        <div className="projet">
                            <img src={ Card3d } alt="Projet 2"/>
                        </div>
                        <div className="text">
                            <p>
                            <span>Création d'une Card 3D</span> proposée par une formation en ligne sur
                            les Translate et les Transform en CSS.
                            </p>
                        </div>
                    </div>
                    <div id="projet3" className="wrapper-projets projet-none">
                        <div className="projet">
                            <img src={ Reseau } alt="Projet 3"/>
                        </div>
                        <div className="text">
                            <p>
                            <span>Création du Front-End</span> d'un site entièrement responsive
                            pour un reseau social. Ce projet est une création recommandée à 
                            l'issue d'une <span>Création du Front-End</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Project;