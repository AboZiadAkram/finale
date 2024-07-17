/** @jsxImportSource @emotion/react */
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { StaffContext } from '../context/StaffContext';
import '../css/SearchBarStyle.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { setStaff } = useContext(StaffContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`https://randomuser.me/api/?results=10&seed=${query}`);
      setStaff(response.data.results);
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  };

  return (
    <form onSubmit={handleSearch} className="input-group">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="form-control"
      />
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
};

export default SearchBar;
