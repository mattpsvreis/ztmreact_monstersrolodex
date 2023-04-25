import React, { Component } from 'react';

import './styles.css';

export default class SearchBox extends Component {
  render() {
    return (
      <input
        type='search'
        className={`search-box ${this.props.className}`}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
      />
    );
  }
}
