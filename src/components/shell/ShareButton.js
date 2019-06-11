import React, { Component } from 'react';

export default class ShareButton extends Component {
    render() {
        return (
            /* share button */
                <a href={this.props.shareLink} className={this.props.socialNet}>
                    <i className={"uxp uxp-" + this.props.socialNet}></i>
                </a>
        );
    }
}