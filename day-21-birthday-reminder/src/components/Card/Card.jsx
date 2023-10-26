import "./Card.css";
const Card = ({ name,birthDate }) => {
  return (
    <div className="card">
      <div className="person">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material-rounded/24/000000/user-male-circle.png"
            alt="user-male-circle"
          />
        <div>{name}</div>
      </div>
      <div className="birthDate">{birthDate}</div>
    </div>
  );
};
export default Card;
