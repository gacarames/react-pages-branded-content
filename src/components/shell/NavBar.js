import React, { Component } from 'react';
/* import navLogo from '../../assets/icons/logo_infobae_naranja.svg' */

export default class NavBar extends Component {
    render() {
        return (
            <nav id="navbar" className="navbar sticky">
                <a className="navbar-link" href="https://www.infobae.com">
                    <img className="navbar-logo" src={require('../../assets/icons/logo_infobae_naranja.svg')} alt="Infobae"></img>
                </a>
            </nav>
        );
    }
}