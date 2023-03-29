import { Component } from 'react';

import './App.css';

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

  render() {
    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(e) => {
            this.setState({ filter: e.target.value.toLocaleLowerCase() });
          }}
        />
        {this.state.monsters
          .filter((e) => e.name.toLocaleLowerCase().includes(this.state.filter))
          .map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })}
      </div>
    );
  }
}
