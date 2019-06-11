import React, { Component } from 'react';

export default class AsideTextImage extends Component {
    render() {

        return (

            <section className="aside-image-block-section">
                <div className="wrapper-aside-image-block container-wide-section">
                    <div className={`aside-image-block ${this.props.side}`}>
                        <div className="aside-image-block-item text">
                            <p>{this.props.content}</p>
                            <div className="extra-background-color"></div>
                        </div>
                        <div className={`aside-image-block-item media`}>
                            {this.props.children}
                            <img className="image" src={this.props.image} alt="alt-text"></img>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}