import { Component } from 'react';

import CardList from './Components/CardList';

import './App.css';
import SearchBox from './Components/SearchBox';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filter: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((r) => r.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      )
      .catch((e) => {
        console.error(e);
      });
  }

  onSearchChange = (e) => {
    this.setState({ filter: e.target.value.toLocaleLowerCase() });
  };

  render() {
    const { monsters, filter } = this.state;
    const { onSearchChange } = this;

    return (
      <div className='App'>
        <SearchBox
          className='monsters-search-box'
          placeholder='search monsters'
          onChange={onSearchChange}
        />
        <CardList monsters={monsters} filter={filter} />
      </div>
    );
  }
}
