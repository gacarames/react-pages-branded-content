import React, { Component } from 'react';

export default class introduction extends Component {
    render() {
        return (
            <section className="introduction-text-section">
                <div className="wrapper-introduction container-small-section">
                    <div className="head-brand">
                        <span className="label-head-brand">BrandedContent para
                            <img className="brand-logo" src={this.props.logo}
                                alt=""></img>
                        </span>

                        <span className="label-head-date">{this.props.date}</span>
                    </div>

                    <p className="block-text-blurb">{this.props.content}</p>
                </div>
            </section>
        );
    }
}