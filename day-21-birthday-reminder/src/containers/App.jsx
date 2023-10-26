import { data } from "../data";
import Cards from "../components/Cards/Cards";
import { useState } from "react";
import "./App.css";
const App = () => {
  const [persons, setPersons] = useState(data);
  return (
    <>
      <div>
        <Cards data={persons} reset={() => setPersons([])}/>
      </div>
    </>
  );
};
export default App;
