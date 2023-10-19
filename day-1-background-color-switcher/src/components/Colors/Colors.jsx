import Color from "../Color/Color";
import { useState } from "react";
import "./Colors.css";
const Colors = () => {
  const [bgColor, setBgColor] = useState("#373f51");
  const colors = [
    { color: "#ffffff", id: 20 },
    { color: "#e0b1cb", id: 21 },
    { color: "#246a73", id: 22 },
    { color: "#691e06", id: 23 },
    { color: "#b69121", id: 24 },
  ];
  const setBackgroundColor = () => {
    document.body.style.backgroundColor = bgColor;
  }
  const clickHandler = (e) => {
    setBgColor(e.target.style.backgroundColor);
  };
  const renderedColors = colors.map((color, index) => (
    <Color color={color.color} key={index} click={(e) => clickHandler(e)} />
  ));
  setBackgroundColor();
  return (
    <div>
      <div className="colors">{renderedColors}</div>
    </div>
  );
};
export default Colors;
