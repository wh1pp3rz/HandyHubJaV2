import React from "react";
import Svg, { Path } from "react-native-svg";

const LocationIcon = (props) => {
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
        d="M10 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM9 7a2 2 0 1 0-4 0 2 2 0 0 0 4 0Zm2.95 4.955A7.005 7.005 0 0 0 7 0a6.998 6.998 0 0 0-7 7.003c0 1.857.737 3.638 2.05 4.952l1.521 1.499 2.043 1.985.133.118c.775.628 1.91.588 2.64-.118l2.435-2.37 1.128-1.114ZM2.755 2.756a6.002 6.002 0 0 1 10.247 4.12 6.008 6.008 0 0 1-1.581 4.19l-.176.184-1.321 1.304-2.23 2.168-.094.08a.997.997 0 0 1-1.2 0l-.093-.08-2.98-2.905-.572-.567-.176-.183a6.008 6.008 0 0 1 .176-8.311Z"
      />
    </Svg>
  );
};

export default LocationIcon;
