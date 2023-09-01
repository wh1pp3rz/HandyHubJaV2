import { View } from "react-native";
import { Text } from "@rneui/base";
import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
    marginTop: 30,
    // marginHorizontal: 16,
    opacity: 0.6,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.grey0,
  },
  text: {
    marginHorizontal: 16,
    fontSize: 12,
    fontFamily: theme.FONT.regular,
    color: theme.colors.grey0,
  },
}));

const Line = ({
  text = null,
  containerStyle = {},
  lineStyle = {},
  textStyle = {},
}) => {
  const styles = useStyles();
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.line, lineStyle]}></View>
      {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
      <View style={[styles.line, lineStyle]}></View>
    </View>
  );
};

export default Line;
