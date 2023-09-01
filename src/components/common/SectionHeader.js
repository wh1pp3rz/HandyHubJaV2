import { View } from "react-native";
import { Text } from "@rneui/base";
import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    fontFamily: theme.FONT.bold,
    color: theme.colors.grey0,
    fontWeight: "600",
    marginVertical: 16,
    paddingLeft: 10,
  },
}));

const SectionHeader = ({ children, containerStyle = {} }) => {
  const styles = useStyles();
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default SectionHeader;
