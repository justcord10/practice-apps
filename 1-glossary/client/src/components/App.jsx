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

  return (
    <div>
      <div>App</div>
      <div><AddEntry /></div>
      <div><Search /></div>
      <div><GlossaryList glossaryList={displayedGlossaryList}/></div>
    </div>
  );
};

export default App;