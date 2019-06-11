import React, { Component } from 'react';

export default class DisplayHeading extends Component {

    render() {
        return (
            <span className={"display-heading " + this.props.TextAlign}>
                {this.props.contentHeading}
            </span>
        );
    }
}