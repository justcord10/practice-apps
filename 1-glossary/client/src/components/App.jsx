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
  const addEntryButtonHandler = () => {
    console.log('clicked Add Entry');
  };

  const searchButtonHandler = () => {
    console.log('clicked Search');
  };

  const editButtonHandler = () => {
    console.log('clicked Edit Entry');
  };

  const deleteButtonHandler = () => {
    console.log('clicked Delete Entry');
  };

  return (
    <div>
      <div>App</div>
      <div><AddEntry addEntryButtonHandler={addEntryButtonHandler}/></div>
      <div><Search searchButtonHandler={searchButtonHandler}/></div>
      <div><GlossaryList glossaryList={displayedGlossaryList} editButtonHandler={editButtonHandler} deleteButtonHandler={deleteButtonHandler}/></div>
    </div>
  );
};

export default App;