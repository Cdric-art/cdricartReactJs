import React from 'react';
import Title from '../components/title';


function Header () {

    return ( 
        
            <div className="Header">

                <div className="Icon-React"></div>
                <h1>Je m'appelle Cédric,</h1>
                <Title />
                <a className="Mail" href="mailto:cdric.art@gmail.com">cdric.art@gmail.com<span> || Paris VI</span></a>

            </div>
    )
}

export default Header;
