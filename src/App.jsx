import React from 'react';

import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox';

import './App.css';

export default function App() {
  const [filter, setFilter] = React.useState('');
  const [monsters, setMonsters] = React.useState([]);
  const [filteredMonsters, setFilteredMonsters] = React.useState(monsters);

  function onSearchChange(event) {
    setFilter(event.target.value.toLocaleLowerCase());
  }

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((r) => r.json())
      .then((users) => setMonsters(users))
      .catch((e) => console.error(e));
  }, [])

  React.useEffect(() => {
    setFilteredMonsters(monsters.filter((e) => e.name.toLocaleLowerCase().includes(filter)))
  }, [monsters, filter])

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='monsters-search-box'
        placeholder='search monsters'
        onChange={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}