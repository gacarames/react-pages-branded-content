import React, { Component } from 'react';

export default class HeaderHero extends Component {

    render() {

        var divStyle = {
            backgroundImage: 'url(' + this.props.image + ')',
        };

        return (

            <header className="header-hero" style={divStyle}
            >
                <div className="container-header bottom">
                    <div className="wrapper-header">

                        <span className="header-label">{this.props.label}</span>

                        <h1 className="main-title">{this.props.title}</h1>

                    </div>
                </div>
            </header>

        );
    }
}