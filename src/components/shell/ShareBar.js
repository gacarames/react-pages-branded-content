import React, { Component } from 'react';

export default class ShareBar extends Component {
    render() {
        return (
            /* share bar */
            <div className="icon-bar">
                {this.props.children}
            </div>
        );
    }
}