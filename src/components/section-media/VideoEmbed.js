import React, { Component } from 'react';

export default class EmbedVideo extends Component {
    render() {
        return (
            <section className="embed-video-section">
                <div className="container-section">
                    <div className={`wrapper-embed-video ratio-${this.props.ratio}`}>
                        <iframe
                            className="embed-video"
                            src={this.props.src} frameBorder="0"
                            title="Iframe Title"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        >
                        </iframe>
                    </div>
                </div>
            </section>
        );
    }
}