import React from "react";
import Axios from 'axios';
import AddEntry from './AddEntry.jsx';
import Search from './Search.jsx';
import GlossaryList from './GlossaryList.jsx';



var App = () => {

  const [mainGlossaryList, setMainGlossaryList] = React.useState([]);
  const [displayedGlossaryList, setDisplayedGlossaryList] = React.useState([]);
  React.useEffect(() => {
    Axios.get(`http://localhost:3000/glossary`)
    .then((list) => {
      console.log(list.data);
      setMainGlossaryList(list.data);
      setDisplayedGlossaryList(list.data);
    });
  }, []);

  // Handlers ////////////////////////////////////////////////////////////////
  const addEntryButtonHandler = (word, def) => {
    console.log(`clicked Add Entry with ${word} and ${def}`);
    Axios.post(`http://localhost:3000/glossary`, {keyword: word, definition: def})
      .then(() => {
        Axios.get(`http://localhost:3000/glossary`)
          .then((list) => {
            setDisplayedGlossaryList(list.data);
            setMainGlossaryList(list.data);
          })
      })
  };

  const searchButtonHandler = (word) => {
    console.log(`clicked Search with ${word}`);
    var copyList = JSON.parse(JSON.stringify(mainGlossaryList));
    var newDisplayedList = [];
    for (var i = 0; i < copyList.length; i++) {
      console.log(copyList[i].keyword);
      if(copyList[i].keyword.includes(word)) {
        newDisplayedList.push(copyList[i]);
      }
    }
    setDisplayedGlossaryList(newDisplayedList);
    console.log(newDisplayedList);
  };

  const editButtonHandler = (word, def, id) => {
    console.log(`clicked Edit Entry with ${word} ${def} ${id}`);
    Axios.patch(`http://localhost:3000/glossary/${id}`, {keyword:word, definition:def})
      .then(() => {
        Axios.get(`http://localhost:3000/glossary`)
          .then((list) => {
            setDisplayedGlossaryList(list.data);
            setMainGlossaryList(list.data);
          })
      })
  };

  const deleteButtonHandler = (entry) => {
    console.log(`clicked Delete Entry with ${entry._id}`);
    Axios.delete(`http://localhost:3000/glossary/${entry._id}`)
    .then(() => {
      Axios.get(`http://localhost:3000/glossary`)
        .then((list) => {
          setDisplayedGlossaryList(list.data);
          setMainGlossaryList(list.data);
        })
    })
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