import { View } from "react-native";
import { Text } from "@rneui/base";
import { makeStyles } from "@rneui/themed";

function ErrorMessage({ error, visible, containerStyle = {}, style = {} }) {
  const styles = useStyles();
  if (!visible || !error) return null;

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      <Text style={[styles.error, style]}>{error}</Text>
    </View>
  );
}

const useStyles = makeStyles((theme) => ({
  containerStyle: {
    flex: 1,
    padding: 5,
    marginBottom: 5,
    marginHorizontal: 10,
  },
  error: { color: theme.colors.warning },
}));

export default ErrorMessage;
