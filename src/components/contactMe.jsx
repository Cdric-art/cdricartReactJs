import React from "react";
import close from "../assets/icons/close.png";
import emailjs ,{ init } from 'emailjs-com';

const userId = process.env.REACT_APP_USER_ID;
const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;

init(userId);

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
        if (this.state.prenom.length > 1 && this.state.mail.length > 10 && this.state.message.length > 1) {

            emailjs.send(serviceId, templateId, this.state)
                .then(res => console.log('SUCCESS !', res.status, res.text))
                .catch(e => console.log('FAILED... !', e))

            document.getElementById('alert').classList.add('alert-open');
            document.getElementById('alert-error').classList.remove('alert-open');
            setTimeout(() => {
                this.props.close();
            }, 2500)
        } else {
            document.getElementById('alert-error').classList.add('alert-open');
        }
    }

    render() {
        return (
            <div className="modal">
                <div id="alert" className="alert">
                    <span>Votre message à été envoyé.</span>
                </div>
                <div id="alert-error" className="alert error">
                    <span>Formulaire incomplet</span>
                </div>
                <div onClick={ this.props.close } className="close">
                    <img src={ close } alt="Close"/>
                </div>
                <form onSubmit={ this.submitHandler } className="form-modal">
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
