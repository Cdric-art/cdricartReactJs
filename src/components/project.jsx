import React from 'react';
import Arrow from '../imgs/arrow.png';


class Project extends React.Component {

    constructor (props) {
        super(props)
        const img0 = require('../imgs/fiasco.gif');
        const img1 = require('../imgs/card3d.gif');
        const img2 = require('../imgs/reseau.gif');

        this.Change = this.Change.bind(this)

        this.state = {
            index: 0,
            imgList: [img0, img1, img2],
            indexP: 0,
            paragraph: [
                <p><span>Création du Front-End</span> d'un site entièrement responsive pour un restaurant. Ce projet est une création proposée à l'issue d'une <span>formation de Grafikart.</span></p>,
                <p><span>Création d'une Card 3D</span> proposée par une formation en ligne sur les Translate et les Transform en CSS.</p>,
                <p><span>Création du Front-End d'un site</span> entièrement responsive
                pour un reseau social. Ce projet est une création recommandée à 
                l'issue d'une <span>formation par Udemy.</span></p>
             ]
        }
    }

    Change () { 
        if (this.state.index + 1 === this.state.imgList.length || this.state.indexP + 1 === this.state.paragraph.length) {
            this.setState ({
                index: 0,
                indexP: 0
            })
        } else {
            this.setState({
                index: this.state.index + 1,
                indexP: this.state.indexP + 1
            })
        }
    }

    render () {

        return (
            <div id="projets">
                <div className="arrow">
                    <img onClick={ this.Change } src={ Arrow } alt="Arrow right"/>
                </div>
                <div className="wrapper-projets">
                    <div>
                        <img id="src" src={ this.state.imgList[this.state.index] } alt="Projet 1"/>
                    </div>
                    <div className="text">
                        { this.state.paragraph[this.state.indexP] }
                    </div>
                </div>       
            </div>
        )
    }

}

export default Project;