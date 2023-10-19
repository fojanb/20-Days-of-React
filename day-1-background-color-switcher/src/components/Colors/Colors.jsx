import Color from "../Color/Color";
import { useState } from "react";
import "./Colors.css";
const Colors = () => {
  const [bgColor, setBgColor] = useState("#fff");
  const colors = [
    { color: "red", id: 20 },
    { color: "blue", id: 21 },
    { color: "green", id: 22 },
    { color: "pink", id: 23 },
    { color: "orange", id: 24 },
  ];
  const clickHandler = (e) => {
    setBgColor(e.target.style.backgroundColor);
    document.body.style.backgroundColor = bgColor;
  };
  const renderedColors = colors.map((color, index) => (
    <Color color={color.color} key={index} click={(e) => clickHandler(e)} />
  ));
  return (
    <div>
      <div className="colors">{renderedColors}</div>
    </div>
  );
};
export default Colors;
