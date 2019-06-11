import React, { Component } from 'react';

export default class Blockquote extends Component {

    render() {

        return (
            <p className="blockquote">{this.props.contentBlockquote}
                <span className="cite">{this.props.contentCite}</span>
            </p>
        );
    }
}