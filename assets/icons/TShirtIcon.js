// assets/icons/TShirtIcon.js
import React from "react";
import Svg, { Path } from "react-native-svg";

const TShirtIcon = ({ color = "#6b4f3b", ...props }) => (
  <Svg
    width={24} // Ajusta el tamaño del ícono
    height={24}
    viewBox="0 0 512 512" // Usa el viewBox del SVG original
    fill="none"
    {...props}
  >
    <Path
      d="M512,272.447c0,0-44.598-131.223-44.616-131.258l-0.008-0.071c-15.773-49.093-54.166-92.033-138.05-101.237c-1.18,39.996-33.533,72.083-73.414,72.128c-39.88,0-72.279-32.052-73.503-72.039C98.533,49.262,60.194,92.247,44.474,141.358l-0.009,0.071C44.447,141.464,0,272.731,0,272.731l94.072,33.861l23.354-60.531v226.058l277.377-0.16l-0.231-226.058l23.398,60.513L512,272.447z"
      fill={color} // Usa la prop "color" para el relleno
    />
  </Svg>
);

export default TShirtIcon;
