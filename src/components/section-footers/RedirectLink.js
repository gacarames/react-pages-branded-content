import React, { Component } from 'react';

export default class RedirectLink extends Component {

    render() {

        return (
            <a
                className={`footer-mega-button ${this.props.position}`}
                href={this.props.link}
                target="_black"
            >
                {this.props.content}
            </a>
        );
    }
}