import "./Color.css";
const Color = ({ color , click}) => {
  return <div onClick={click} className="color" style={{ backgroundColor: color }}></div>;
};
export default Color;
