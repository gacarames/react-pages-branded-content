import React, { Component } from 'react';

export default class Author extends Component {

    render() {

        return (
            <div className="by-line in-header">
                <img className="author-img" src={this.props.image} alt={this.props.author}></img>
                <span className="label-author-name">Por {this.props.author}</span>
            </div>
        );
    }
}