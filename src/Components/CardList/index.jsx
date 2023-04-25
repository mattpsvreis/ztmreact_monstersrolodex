import React, { Component } from 'react';

export default class CardList extends Component {
  render() {
    const { monsters, filter } = this.props;

    return monsters
      .filter((e) => e.name.toLocaleLowerCase().includes(filter))
      .map((monster) => {
        return (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        );
      });
  }
}
