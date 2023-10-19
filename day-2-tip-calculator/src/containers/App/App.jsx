import { useState } from "react";
import Persons from "../../components/Persons/Persons";
import Tip from "../../components/Tip/Tip";
import Total from "../../components/Total/Total";
import "./App.css";
const App = () => {
  const [result, setResult] = useState(0);
  const personsHandler = (e) => {
    console.log("My ev ent")
  };
  return (
    <div className="wrapper">
      <Persons changeHandler={(e) => personsHandler(e)} />
      <Total changeHandler={(e) => personsHandler(e)}/>
      <Tip changeHandler={(e) => personsHandler(e)}/>
      {result}
    </div>
  );
};
export default App;
