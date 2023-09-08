import React from "react";
import Svg, { Path } from "react-native-svg";

const StarIcon = (props) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill={props.color || "none"}
      {...props}
    >
      <Path d="m6 .5 1.347 4.146h4.36L8.18 7.208l1.347 4.146L6 8.792l-3.527 2.562L3.82 7.208.294 4.646h4.359L6 .5Z" />
    </Svg>
  );
};

export default StarIcon;
