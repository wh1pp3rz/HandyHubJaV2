import { TouchableOpacity } from "react-native";
import { Text } from "@rneui/themed";

import useStyles from "./TabButton.styles";

const TabButton = ({ title, active, onPress }) => {
  const styles = useStyles();

  return (
    <TouchableOpacity style={styles.tab(active)} onPress={onPress}>
      <Text style={styles.tabText(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabButton;
