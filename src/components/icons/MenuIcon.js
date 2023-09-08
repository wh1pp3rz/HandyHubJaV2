import React from "react";
import Svg, { Path } from "react-native-svg";

const MenuIcon = (props) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill={props.color || "none"}
      {...props}
    >
      <Path
        fill={props.color}
        d="M3 4h18v2H3V4Zm0 7h12v2H3v-2Zm0 7h18v2H3v-2Z"
      />
    </Svg>
  );
};

export default MenuIcon;
