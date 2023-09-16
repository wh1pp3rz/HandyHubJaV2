import React from "react";
import Svg, { Path } from "react-native-svg";

const EditIcon = (props) => {
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
        d="M3.414 14.89 13.556 4.748l-1.414-1.414L2 13.476v1.414h1.414Zm.829 2H0v-4.243L11.435 1.212a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L4.243 16.89ZM0 18.89h18v2H0v-2Z"
      />
    </Svg>
  );
};

export default EditIcon;
