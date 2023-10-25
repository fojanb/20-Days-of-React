import { useState, useEffect } from "react";
import Color from "../Color/Color";
import { colors } from "../../colors";
import "./Colors.css";
const Colors = () => {
  const [bgColor, setBgColor] = useState("#373f51");
  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
  });
  const renderedColors = colors.map(clr => {
    const { color, id } = clr;
    return (
      <Color
        color={color}
        key={id}
        click={(e) => setBgColor(e.target.style.backgroundColor)}
      />
    );
  });
  return <div className="colors">{renderedColors}</div>;
};
export default Colors;
