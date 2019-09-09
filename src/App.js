import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState('');
  useEffect( () => {
    async function getData() {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        setMonsters(res.data);
      } catch (e) {
        console.log(e.statusText)
      }
    }
    getData();
  },[]);
  const onSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(search.toLowerCase()));
    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox
          value={search}
          handleSearch={onSearch}
          placeholder='Search monsters' />
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
};

export default App;
