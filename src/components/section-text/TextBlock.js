import React, { Component } from 'react';

export default class TextBlock extends Component {

    render() {

        return (
            <section className="block-text-section">
                <div className="wrapper-block-text container-small-section">
                    {this.props.children}
                </div>
            </section>
        );
    }
}