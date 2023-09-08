import { View } from "react-native";
import { Text } from "@rneui/themed";

import useStyles from "./Badge.styles";
const Badge = ({ value, containerStyle = {}, textStyle }) => {
  const styles = useStyles();

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{value}</Text>
    </View>
  );
};

export default Badge;
