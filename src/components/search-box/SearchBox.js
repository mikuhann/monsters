import React from 'react';

import './SearchBox.css'

const SearchBox = ({value, placeholder, handleSearch}) => {
  return (
    <input
      className='search-box'
      type='search'
      value={value}
      placeholder={placeholder}
      onChange={handleSearch}
      />
  );
};

export default SearchBox;
