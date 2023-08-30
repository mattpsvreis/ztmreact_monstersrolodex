import React from 'react';

import Card from '../Card';

import './styles.css';

export default function CardList({ monsters }) {
  <div className='card-list'>
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>
}
