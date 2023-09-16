import React from "react";
import Svg, { Path } from "react-native-svg";

const CameraIcon = (props) => {
  return (
    <Svg
      width={props.size || 24}
      height={props.size || 24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path stroke={props.color} d="M8 10.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <Path
        stroke={props.color}
        d="M6.519 14H9.48c2.08 0 3.122 0 3.869-.49.322-.211.6-.484.817-.803.5-.733.5-1.755.5-3.798s0-3.064-.5-3.798a2.939 2.939 0 0 0-.817-.802c-.48-.316-1.081-.428-2.002-.468a.937.937 0 0 1-.903-.75A1.376 1.376 0 0 0 9.089 2H6.911c-.66 0-1.226.457-1.356 1.09a.937.937 0 0 1-.903.75c-.92.04-1.521.154-2.002.469-.322.211-.6.484-.817.802-.5.734-.5 1.755-.5 3.798s0 3.064.5 3.798c.216.318.493.59.817.803.747.49 1.788.49 3.869.49Z"
      />
      <Path stroke={props.color} strokeLinecap="round" d="M12.667 6.667H12" />
    </Svg>
  );
};

export default CameraIcon;
