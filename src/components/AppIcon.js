import React from "react";
import { TouchableOpacity } from "react-native";
import * as Icons from "./icons";

const AppIcons = ({ name, size, color, onPress, ...props }) => {
  const IconComponent =
    Icons[`${name.charAt(0).toUpperCase() + name.slice(1)}Icon`];

  if (!IconComponent) {
    console.warn(`Icon with name ${name} does not exist.`);
    return null;
  }

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <IconComponent size={size} color={color} {...props} />
      </TouchableOpacity>
    );
  }

  return <IconComponent size={size} color={color} {...props} />;
};

export default AppIcons;
