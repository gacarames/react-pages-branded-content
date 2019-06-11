import React, { Component } from 'react';

export default class Paragraph extends Component {

    render() {

        return (
            <p className={this.props.typeParagraph}>{this.props.contentParagraph}</p>

        );
    }
}