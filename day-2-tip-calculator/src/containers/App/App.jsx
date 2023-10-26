import { useState, useEffect } from "react";
import Persons from "../../components/Persons/Persons";
import Tip from "../../components/Tip/Tip";
import Total from "../../components/Total/Total";
import "./App.css";
const App = () => {
  const [values, setValues] = useState({
    persons: 0,
    total: 0,
    tip: 0,
  });
  useEffect(() => {
    let final = values.total + (values.total * values.tip) / 100;
    document.getElementById("final").innerText = final;
    if(!values.persons){
      return;
    }
    document.getElementById("per-person").innerText = final / values.persons;
  });
  const changeHandler = (e) => {
    let { name, value } = e.target;
    setValues({ ...values, [name]: parseInt(value) });
  };
  return (
    <div className="wrapper">
      <Persons changeHandler={(e) => changeHandler(e)} />
      <Total changeHandler={(e) => changeHandler(e)} />
      <Tip changeHandler={(e) => changeHandler(e)} />
      <div id="final"></div>
      <div id="per-person"></div>
    </div>
  );
};
export default App;
