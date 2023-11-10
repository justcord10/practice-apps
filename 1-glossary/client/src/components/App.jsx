import React from "react";
import Axios from 'axios';
import AddEntry from './AddEntry.jsx';
import Search from './Search.jsx';
import GlossaryList from './GlossaryList.jsx';


var App = () => {

  return (
    <div>
      <div>App</div>
      <div><AddEntry /></div>
      <div><Search /></div>
      <div><GlossaryList /></div>
    </div>
  );
};

export default App;