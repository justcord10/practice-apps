import React from 'react';


var GlossaryListItem = ({entry, editButtonHandler, deleteButtonHandler}) => {

  const midEditButtonHandler = () => {
    var editedData = prompt('Edit the Entry, be sure to leave the : unchanged', `${entry.keyword}:${entry.definition}`);

    var splitData = editedData.split(':');

    editButtonHandler(splitData[0], splitData[1], entry._id);
  };

  return (
    <div>
      <h4>{entry.keyword}</h4>
      <div>{entry.definition}</div>
      <div> <button onClick={() => midEditButtonHandler(entry)}>Edit</button> <button onClick={() => deleteButtonHandler(entry)}>Delete</button> </div>
    </div>
  );
};

export default GlossaryListItem;