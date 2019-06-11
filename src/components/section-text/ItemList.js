import React, { Component } from 'react';

export default class ItemList extends Component {
    /* constructor(props) {
        super(props);
    } */

    render() {

        return (
            <li className={`item-list ${this.props.item.icon}`}>{this.props.item.content}</li>
        );
    }
}