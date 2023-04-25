import React, { Component } from 'react';

import Card from '../Card';

import './styles.css';

export default class CardList extends Component {
  render() {
    const { monsters, filter } = this.props;

    return (
      <div className='card-list'>
        {monsters
          .filter((e) => e.name.toLocaleLowerCase().includes(filter))
          .map((monster) => {
            return <Card monster={monster} />;
          })}
      </div>
    );
  }
}
