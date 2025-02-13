// assets/icons/DressIcon.js
import React from "react";
import Svg, { Path } from "react-native-svg";

const DressIcon = ({ color = "#6b4f3b", ...props })=> (
  <Svg
    width={24} // Ajusta el tamaño del ícono
    height={24}
    viewBox="0 0 512 512" // Usa el viewBox del SVG original
    fill="none"
    {...props}
  >
    <Path
      d="M57.653,512h396.693c-7.07-210.098-120.872-261.389-123.68-304.672c-2.803-43.274,22.467-66.848,33.646-109.41l35.708,18.394l34.814-52.161c0,0-53.416-42.94-84.19-64.151c0,0-42.065,34.184-94.644,34.184C203.424,34.184,161.354,0,161.354,0c-30.773,21.212-84.19,64.151-84.19,64.151l34.818,52.161l35.704-18.394c11.18,42.561,36.454,66.136,33.646,109.41C178.525,250.611,64.723,301.902,57.653,512z"
      fill={color} // Color del ícono
    />
  </Svg>
);

export default DressIcon;