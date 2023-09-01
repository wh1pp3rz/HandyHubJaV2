import * as Icons from "./icons";

const AppIcons = ({ name, size, color, ...props }) => {
  const IconComponent =
    Icons[`${name.charAt(0).toUpperCase() + name.slice(1)}Icon`];

  if (!IconComponent) {
    console.warn(`Icon with name ${name} does not exist.`);
    return null;
  }

  return <IconComponent size={size} color={color} {...props} />;
};

export default AppIcons;
