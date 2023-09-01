import React from "react";
import Svg, { Path } from "react-native-svg";

const EmailIcon = (props) => {
  const { size = 24, color = "#000" } = props;

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
        d="M3 5v-.75a.75.75 0 0 0-.75.75H3Zm18 0h.75a.75.75 0 0 0-.75-.75V5ZM3 5.75h18v-1.5H3v1.5ZM20.25 5v12h1.5V5h-1.5ZM19 18.25H5v1.5h14v-1.5ZM3.75 17V5h-1.5v12h1.5ZM5 18.25c-.69 0-1.25-.56-1.25-1.25h-1.5A2.75 2.75 0 0 0 5 19.75v-1.5ZM20.25 17c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 21.75 17h-1.5Z"
      />
      <Path
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3 5 9 9 9-9"
      />
    </Svg>
  );
};

export default EmailIcon;
