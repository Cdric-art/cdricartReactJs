import React from 'react';
import Star from '../imgs/etoile.png';

class Skills extends React.Component {
    render () {
        return (
                <div className="Skills" id="skills">
                    <div className="Row">
                        <div className="Card-Skill">
                            <h3>HTML</h3>
                            <span className="bar-1"/>
                        </div>
                        <div className="Card-Skill">
                            <h3>CSS / SASS</h3>
                            <span className="bar-1"/>
                        </div>
                    </div>
                    <div className="Row">
                        <div className="Card-Skill React">
                            <img src={ Star } alt="Etoile favori"/>
                            <h3>ReactJs / Redux</h3>
                            <span className="bar-4"/>
                        </div>
                        <div className="Card-Skill">
                            <h3>JavaScript</h3>
                            <span className="bar-4"/>
                        </div>
                    </div>
                    <div className="Row">
                        <div className="Card-Skill">
                            <h3>NodeJS / ExpressJS - AdonisJS</h3>
                            <span className="bar-4"/>
                        </div>
                        <div className="Card-Skill">
                            <h3>MongoDB / GraphQL / SQL</h3>
                            <span className="bar-5"/>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Skills;