import React from "react";
import close from "../imgs/close.png";
import * as axios from "axios";

class ContactMe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            prenom: '',
            mail: '',
            message: ''
        }
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }


    submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://www.cdricart.site/api/index.php', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        this.props.close();
    }


    render() {
        return (
            <div className="modal">
                <div onClick={ this.props.close } className="close">
                    <img src={ close } alt="Close"/>
                </div>
                <form onSubmit={ this.submitHandler } className="form-modal" method="POST">
                    <input onChange={ this.handleChange } type="text" name="prenom" placeholder="Votre prénom :"/>
                    <input onChange={ this.handleChange } type="email" name="mail" placeholder="Votre email :"/>
                    <textarea onChange={ this.handleChange } name="message" cols="30" rows="5" placeholder="Votre message :"/>
                    <p>Vos données personnelles (prénom et email) ne sont utilisées que pour me permettre de vous adresser une réponse et ne sont pas partagé avec des tiers.</p>
                    <button type="submit" className="btn-modal">Envoyer</button>
                </form>
            </div>
        )
    }
}

export default ContactMe;