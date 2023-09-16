import { View } from "react-native";
import { router } from "expo-router";

import AppIcons from "../AppIcon";

const NotificationsButton = ({ icon, color, route }) => {
  return (
    <View style={{ marginRight: 16 }}>
      <AppIcons name={icon} color={color} onPress={() => router.push(route)} />
    </View>
  );
};

export default NotificationsButton;
