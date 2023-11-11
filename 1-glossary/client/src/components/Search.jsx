import React from 'react';

var Search = ({searchButtonHandler}) => {
const [searchInputText, setSearchInputText] = React.useState('');

const searchHandleChange = (e) => {
  setSearchInputText(e.target.value);
  console.log(`search: ${e.target.value}`);
};

  return (
    <div>
      <input className="search-text" placeholder="search for a word!" onChange={(e) => searchHandleChange(e)}></input>
      <button className="search" onClick={() => (searchButtonHandler(searchInputText))}>Search</button>
    </div>
  );
};

export default Search;