import React from "react";
import close from "../imgs/close.png";

class ContactMe extends React.Component {

    render() {
        return (
            <div className="modal">
                <div onClick={ this.props.close } className="close">
                    <img src={ close } alt="Close"/>
                </div>
                <form className="form-modal" method="POST">
                    <input type="text" name="prenom" placeholder="Votre prénom :"/>
                    <input type="email" name="email" placeholder="Votre E-Mail :"/>
                    <textarea name="message" cols="30" rows="5" placeholder="Votre message :"/>
                    <p>Vos données personnelles (email et nom d'utilisateur) ne sont utilisées que pour me permettre de vous adresser une réponse et ne sont pas partagé avec des tiers.</p>
                    <button onClick={ this.props.close } className="btn-modal">Envoyer</button>
                </form>
            </div>
        )
    }
}

export default ContactMe;