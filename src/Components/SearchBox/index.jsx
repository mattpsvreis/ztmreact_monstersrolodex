import React from 'react';

import './styles.css';

export default function SearchBox({ className, placeholder, onChange }) {
  <input
    type='search'
    className={`search-box ${className}`}
    placeholder={placeholder}
    onChange={onChange}
  />
}
