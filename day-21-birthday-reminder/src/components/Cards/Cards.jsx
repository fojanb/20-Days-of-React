import Card from "../Card/Card";
import "./Cards.css";
const Cards = ({ data, reset }) => {
  let renderedData = data.map((person) => {
    const { id, name, date } = person;
    return <Card key={id} name={name} birthDate={date} />;
  });
  return (
    <>
      <div className="cards">
        {renderedData}
        <button onClick={reset}>Delete</button>
      </div>
    </>
  );
};
export default Cards;
