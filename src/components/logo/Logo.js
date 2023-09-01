import { View } from "react-native";
import { Text } from "@rneui/base";
import { Image } from "expo-image";
import logo from "../../../assets/logo.png";

import useStyles from "./Logo.styles";

const Logo = () => {
  const styles = useStyles();

  return (
    <View style={styles.logoContainer}>
      <Image source={logo} contentFit="cover" style={styles.image} />
    </View>
  );
};

export default Logo;
