// assets/icons/PantIcon.js
import React from "react";
import Svg, { Path, Rect } from "react-native-svg";

const PantIcon = ({ color = "#6b4f3b", ...props }) => (
  <Svg
    width={24} // Ajusta el tamaño del ícono
    height={24}
    viewBox="0 0 512 512" // Ajusta el viewBox según el SVG original
    fill="none"
    {...props}
  >
    {/* Primer Path */}
    <Path
      d="M406.997,51.615H105.002c-2.568,0-4.648,2.08-4.648,4.648V507.36c0,2.56,2.08,4.64,4.648,4.64h117.086c2.416,0,4.424-1.84,4.632-4.248l24.655-287.267c0.201-2.4,2.216-4.248,4.624-4.248c2.408,0,4.424,1.848,4.623,4.248l24.656,287.267c0.208,2.408,2.216,4.248,4.632,4.248h117.086c2.568,0,4.648-2.08,4.648-4.64V56.263C411.646,53.695,409.566,51.615,406.997,51.615z"
      fill={color} // Color del ícono
    />
    {/* Rectángulos */}
    <Rect x="225.28" y="0" width="61.439" height="40.144" fill={color} />
    <Rect x="100.354" y="0" width="107.718" height="40.144" fill={color} />
    <Rect x="302.287" y="0" width="109.358" height="40.144" fill={color} />
  </Svg>
);

export default PantIcon;