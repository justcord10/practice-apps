import React from 'react';
import GlossaryListItem from './GlossaryListItem.jsx';

var GlossaryList = ({glossaryList, editButtonHandler, deleteButtonHandler}) => {

  return (
    <div>
      <div>Glossary List</div>
      {glossaryList.map((entry) => (
        <div><GlossaryListItem entry={entry} /></div>
      ))}
    </div>
  );
};


export default GlossaryList;