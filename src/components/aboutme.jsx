import React from 'react';
import whireimg from '../assets/icons/whire.png';
import cvIcon from '../assets/icons/cv-icon.png';
import cv from '../download/CV-EVRARDCedric.pdf';


class Aboutme extends React.Component {
    render() {
        return (
             <div className="Aboutme">
                 <div id="about" className="wrapper-card">
                        <article className="card">
                            <div className="favicon"/>
                            <p>
                            Je suis un jeune développeur intégrateur web de 29 ans, habitant à Paris dans le 6eme arrondissement. <span>Après avoir été autodidacte de nombreux mois dans ce domaine, j'ai commencé récemment une formation proposée par l’IFOCOP.</span> A l’issue de celle-ci, j’aurai acquis les dernières compétences qu’il me manque pour réaliser à bien ma reconversion professionnelle et devenir un développeur web accompli.
                            </p>
                        </article>
                        <article className="card">
                            <p>
                            <span>Avant de me lancer dans le développement Web, j'étais Barman.</span> En 2009, j’ai obtenu un Bac Technologique Hôtelier à Gérardmer dans le Lycée Hôtelier J.B.S Chardin. Cela fait aujourd’hui 10 ans que j’exerce le métier de barman. J’ai eu la chance d’avoir beaucoup d’expériences et de statuts différents. J’ai été salarié en CDI, CDD, Extra, Saisonnier mais également gérant d’une SARL.
                            </p>
                            <div className="whire">
                                <p><span>N'hésitez pas à visiter ma page Whire où vous en apprendrez plus sur moi.</span> Cliquez sur le logo !</p>
                                <a href="https://www.whire.me/@cdricart" rel="noopener noreferrer" target="_blank">
                                    <img src={ whireimg } alt="Whire"/>
                                </a>
                            </div>
                        </article>
                 </div>
                 <div className="wrapper-exp">
                     <article className="experience">
                        <div className="listExp">
                            <ul>
                                <li><span>Février 2021</span> - AdonisJs - <span>Autodidact</span></li>
                                <li><span>Janvier 2021 - Février 2021</span> - NodeJs Express MongoDB - <span>OpenClassRooms</span></li>
                                <li><span>Septembre 2020 - Janvier 2021</span> - Stage Développeur Web ReactJs - <span>Whire</span></li>
                                <li><span>Juin 2020 - Janvier 2021</span> - Formation Développeur Intégrateur Web - <span>IFOCOP</span></li>
                                <li><span>Juillet 2020 - Septembre 2020</span> - ReactJs - <span>OpenClassRooms, Grafikart</span></li>
                                <li><span>Janvier 2020 - Mars 2020</span> - JavaScript - <span>Udemy, OpenClassRooms, Grafikart</span></li>
                                <li><span>Octobre 2019 - Janvier 2020</span> - Développeur Intégrateur Web - <span>Udemy</span></li>
                            </ul>
                        </div>
                        <div className="cv">
                            <a href={ cv } rel="noopener noreferrer" target="_blank">
                                <img src={ cvIcon } alt="Mon Cv"/>
                            </a>
                        </div>
                     </article>
                 </div>
             </div>
        );
    }
}

export default Aboutme;
