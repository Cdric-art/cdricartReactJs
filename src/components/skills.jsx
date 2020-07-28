import React from 'react';

class Skills extends React.Component {
    render () {
        return (
                <div className="Skills" id="skills">
                    <div className="Row">
                        <div className="Card-Skill">
                            <h3>HTML</h3>
                            <span className="bar-1"></span>
                        </div>
                        <div className="Card-Skill">
                            <h3>CSS</h3>
                            <span className="bar-1"></span>
                        </div>
                    </div>
                    <div className="Row">
                        <div className="Card-Skill">
                            <h3>Bootstrap</h3>
                            <span className="bar-3"></span>
                        </div>
                        <div className="Card-Skill">
                            <h3>JavaScript</h3>
                            <span className="bar-4"></span>
                        </div>
                    </div>
                    <div className="Row">
                        <div className="Card-Skill">
                            <h3>PHP</h3>
                            <span className="bar-5"></span>
                        </div>
                        <div className="Card-Skill">
                            <h3>ReactJs</h3>
                            <span className="bar-6"></span>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Skills;