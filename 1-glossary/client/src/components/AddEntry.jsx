import React from "react";

var AddEntry = ({addEntryButtonHandler}) => {
  const[inputWordText, setInputWordText] = React.useState('');
  const[inputDefinitionText, setInputDefinitionText] = React.useState('');

  const wordHandleChange = (e) => {
    setInputWordText(e.target.value);
    console.log('word:   ', e.target.value);
  }
  const defHandleChange = (e) => {
    setInputDefinitionText(e.target.value);
    console.log('def:    ', e.target.value);
  }

  return (
    <div>
      <input className="keyword" placeholder="add keyword!" onChange={(e) => wordHandleChange(e)}></input>
      <input className="definition" placeholder="add definition!" onChange={(e) => defHandleChange(e)}></input>
      <button className="add-entry" onClick={() => {addEntryButtonHandler(inputWordText, inputDefinitionText)}}>Add Entry</button>
    </div>
  );

};

export default AddEntry;