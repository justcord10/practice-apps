import React from 'react';
import GlossaryListItem from './GlossaryListItem.jsx';

var GlossaryList = ({glossaryList, editButtonHandler, deleteButtonHandler}) => {

  return (
    <div>
      <h3>Glossary List</h3>
      {glossaryList.map((entry) => (
        <div><GlossaryListItem entry={entry} editButtonHandler={editButtonHandler} deleteButtonHandler={deleteButtonHandler} /></div>
      ))}
    </div>
  );
};


export default GlossaryList;