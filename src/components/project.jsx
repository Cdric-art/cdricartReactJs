import React, {useState} from 'react';

import Pineapple from '../assets/images/pineapple.png';
import Pineapple1 from '../assets/images/pineapple1.png';
import Pineapple2 from '../assets/images/pineapple2.png';
import Pineapple3 from '../assets/images/pineapple3.png';
import Whire from '../assets/images/whire.png';
import Whire1 from '../assets/images/whire1.png';
import Whire2 from '../assets/images/whire2.png';
import Whire3 from '../assets/images/whire3.png';
import Artiste from '../assets/images/artiste.png';
import Artiste1 from '../assets/images/artiste1.png';
import Artiste2 from '../assets/images/artiste2.png';
import Artiste3 from '../assets/images/artiste3.png';
import Weather from '../assets/images/weather.png';
import Weather1 from '../assets/images/weather1.png';
import Weather2 from '../assets/images/weather2.png';
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
                                    <p>
                                        Pas simple de trouver une équipe prête à vous donner une chance quand vous êtes
                                        développeur junior et encore plus par ces temps de Covid...
                                    </p>
                                    <p>
                                        J'ai crée ce projet pour:
                                    </p>
                                    <ul>
                                        <li>Mon apprentissage du backend avec Node</li>
                                        <li>M'exercer sur React</li>
                                        <li>Avoir un projet supplémentaire à présenter aux recruteurs</li>
                                    </ul>
                                </div>
                                <div className="infosup">
                                    <h3>Infos</h3>
                                    <span className="hr-blue"/>
                                    <p>Année 2020 - 2021</p>
                                    <a href="https://pine-apple-server.herokuapp.com/">Lien vers le projet</a>
                                    <hr/>
                                    <p>
                                        <span className="pills-html">HTML</span>
                                        <span className="pills-scss">SCSS</span>
                                        <span className="pills-react">REACT</span>
                                        <span className="pills-redux">REDUX</span>
                                        <span className="pills-node">NODE</span>
                                        <span className="pills-express">EXPRESS</span>
                                        <span className="pills-mongo">MONGODB</span>
                                    </p>
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
                            <div className="images">
                                <img src={Whire1} alt="Whire 1"/>
                                <img src={Whire2} alt="Whire 2"/>
                                <img src={Whire3} alt="Whire 3"/>
                            </div>
                            <div className="text">
                                <div className="description">
                                    <h3>Description</h3>
                                    <span className="hr-blue"/>
                                    <p>
                                        Après plus de 4 mois passé dans les rangs de la team Whire,
                                        je reprends la route à la recherche d'une nouvelle équipe avec
                                        laquelle je continuerai à apprendre et à m'épanouir dans ma nouvelle carrière.
                                    </p>
                                    <p>
                                        Après plus de 4 mois passé dans les rangs de la team Whire,
                                        je reprends la route à la recherche d'une nouvelle équipe avec laquelle
                                        je continuerai à apprendre et à m'épanouir dans ma nouvelle carrière.
                                        Une immense fierté d'avoir développé le nouveau site Whire, d'avoir
                                        participé au développement de nouvelles fonctionnalités de la plateforme
                                        et tant d'autres choses. Une équipe tout au moins aussi incroyable que
                                        ce que crée Whire... : De belles rencontres !
                                    </p>
                                </div>
                                <div className="infosup">
                                    <h3>Infos</h3>
                                    <span className="hr-blue"/>
                                    <p>Année 2020 - 2021</p>
                                    <a href="https://www.whire.me">Lien vers le projet</a>
                                    <hr/>
                                    <p>
                                        <span className="pills-html">HTML</span>
                                        <span className="pills-scss">SCSS</span>
                                        <span className="pills-react">REACT</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : index === 2 ? (
                    <>
                        <div className="detail-header">
                            <img src={Close} alt="Close"/>
                            <h3>Artiste</h3>
                        </div>
                        <div className="detail-body">
                            <div className="images">
                                <img src={Artiste3} alt="Artiste 1"/>
                                <img src={Artiste1} alt="Artiste 2"/>
                                <img src={Artiste2} alt="Artiste 3"/>
                            </div>
                            <div className="text">
                                <div className="description">
                                    <h3>Description</h3>
                                    <span className="hr-blue"/>
                                    <p>
                                        <cite>"Mise en ligne d'une boutique e-commerce sur un sujet libre à l'aide de WooCommerce"</cite>
                                    </p>
                                    <p>
                                        Bon, trouver le sujet n'a pas été le plus compliqué. Par contre, trouver la
                                        motivation de travailler sur WordPress.. cela a été un enfer ! Ce n'est pas
                                        que je déteste WordPress (juste un peu) mais c'est surtout que je ne prends
                                        aucun plaisir à développer sur cet outil.
                                        <span aria-label="emoji" role="img"> 😑</span>
                                    </p>
                                    <p>
                                        La deadline approche vite et toujours pas de motivation. Je commence à
                                        chercher à pimenter un peu le projet, <span aria-label="emoji" role="img"> 🤔</span> à me lancer un vrai défi histoire
                                        de m'amuser un peu malgré l'obligation d'utiliser WordPress.
                                    </p>
                                    <p>
                                        L'idée est de créer une vitrine et à la fois une boutique pour un Street
                                        artiste ! <span aria-label="emoji" role="img"> ✨</span>
                                    </p>
                                    <p>
                                        <span className="markdown">composer create-project --prefer-dist wordplate/wordplate </span> et hop c'est parti !
                                    </p>
                                    <p>
                                        Je développe la boutique, un joli petit thème et prépare le back-end pour que le (faux) client puisse piloter facilement
                                        les produits affichés en boutique, mais également ses œuvres qui seront mises en avant sur le site vitrine.
                                    </p>
                                    <p>
                                        <span aria-label="emoji" role="img">🚀 </span> Un petit <span className="markdown">npx create-react-app vitrine</span> et là, je commence enfin à m'amuser ! <span aria-label="emoji" role="img"> 🚀</span>
                                    </p>
                                    <p>
                                        Petite préparation de l'environnement pour utiliser l'api REST de WordPress
                                        et WooCommerce puis le router pour la navigation et voilà, je m'éclate ! <span aria-label="emoji" role="img"> 🤩</span>
                                    </p>
                                </div>
                                <div className="infosup">
                                    <h3>Infos</h3>
                                    <span className="hr-blue"/>
                                    <p>Année 2020 - 2021</p>
                                    <a href="https://www.artiste.cdricart.site/">Lien vers le projet</a>
                                    <hr/>
                                    <p>
                                        <span className="pills-html">HTML</span>
                                        <span className="pills-scss">SCSS</span>
                                        <span className="pills-react">REACT</span>
                                        <span className="pills-wordpress">WORDPRESS</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : index === 3 ? (
                    <>
                        <div className="detail-header">
                            <img src={Close} alt="Close"/>
                            <h3>Weather App</h3>
                        </div>
                        <div className="detail-body">
                            <div className="images">
                                <img src={Weather} alt="Weather 1"/>
                                <img src={Weather1} alt="Weather 2"/>
                                <img src={Weather2} alt="Weather 3"/>
                            </div>
                            <div className="text">
                                <div className="description">
                                    <h3>Description</h3>
                                    <span className="hr-blue"/>
                                    <p>
                                        Pas simple de trouver une équipe prête à vous donner une chance quand vous
                                        êtes développeur junior et encore plus par ces temps de Covid...
                                    </p>
                                    <p>
                                        J'ai crée ce projet pour:
                                    </p>
                                    <ul>
                                        <li>M'exercer sur React</li>
                                        <li>Avoir un projet supplémentaire à présenter aux recruteurs</li>
                                    </ul>
                                </div>
                                <div className="infosup">
                                    <h3>Infos</h3>
                                    <span className="hr-blue"/>
                                    <p>Année 2021</p>
                                    <a href="https://github.com/Cdric-art/weather-app">Lien vers le projet</a>
                                    <hr/>
                                    <p>
                                        <span className="pills-html">HTML</span>
                                        <span className="pills-scss">SCSS</span>
                                        <span className="pills-react">REACT</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
            </div>
        </section>
    );
};


export default Project;
