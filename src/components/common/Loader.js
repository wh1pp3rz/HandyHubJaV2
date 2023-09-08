import { ActivityIndicator } from "react-native";
import { useTheme } from "@rneui/themed";

const Loader = ({ size, ...otherProps }) => {
  const { theme } = useTheme();

  return (
    <ActivityIndicator
      size={size}
      color={theme.colors.primary}
      {...otherProps}
    />
  );
};

export default Loader;
