import React, { Component } from 'react';
import ItemList from './ItemList';

export default class List extends Component {

    render() {

        const itemsList = this.props.list.map((item, i) => (
            <ItemList key={item.id} item={item} />
        ));

        return (
            <ul className={`list ${this.props.type}`}>
                {itemsList}
            </ul>
        );
    }
}