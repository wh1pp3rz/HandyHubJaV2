import React from "react";
import Svg, { Path } from "react-native-svg";

const MenuItemIcon = (props) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        fill={props.color}
        d="m18 15-.001 3H21v2h-3.001L18 23h-2l-.001-3H13v-2h2.999L16 15h2Zm-7 3v2H3v-2h8Zm10-7v2H3v-2h18Zm0-7v2H3V4h18Z"
      />
    </Svg>
  );
};

export default MenuItemIcon;
