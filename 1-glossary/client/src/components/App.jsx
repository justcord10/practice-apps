import React from "react";
import Axios from 'axios';
import AddEntry from './AddEntry.jsx';
import Search from './Search.jsx';
import GlossaryList from './GlossaryList.jsx';


var App = () => {

  const [mainGlossaryList, setMainGlossaryList] = React.useState([]);
  const [displayedGlossaryList, setDisplayedGlossaryList] = React.useState([]);
  React.useEffect(() => {
    Axios.get('http://localhost:3000/glossary')
    .then((list) => {
      console.log(list.data);
      setMainGlossaryList(list.data);
      setDisplayedGlossaryList(list.data);
    });
  }, []);

  // Handlers ////////////////////////////////////////////////////////////////
  const addEntryButtonHandler = (word, def) => {
    console.log(`clicked Add Entry with ${word} and ${def}`);

  };

  const searchButtonHandler = (word) => {
    console.log(`clicked Search with ${word}`);
  };

  const editButtonHandler = (word, def, id) => {
    console.log(`clicked Edit Entry with ${word} ${def} ${id}`);
  };

  const deleteButtonHandler = (entry) => {
    console.log(`clicked Delete Entry with ${entry._id}`);
  };

  return (
    <div>
      <div> </div>
      <div><AddEntry addEntryButtonHandler={addEntryButtonHandler}/></div>
      <div><Search searchButtonHandler={searchButtonHandler}/></div>
      <div><GlossaryList glossaryList={displayedGlossaryList} editButtonHandler={editButtonHandler} deleteButtonHandler={deleteButtonHandler}/></div>
    </div>
  );
};

export default App;