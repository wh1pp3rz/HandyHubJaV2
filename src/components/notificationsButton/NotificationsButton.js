import { View } from "react-native";
import { useTheme } from "@rneui/themed";
import { router } from "expo-router";

import AppIcons from "../AppIcon";

const NotificationsButton = () => {
  const { theme } = useTheme();

  return (
    <View style={{ marginRight: 16 }}>
      <AppIcons
        name="notification"
        color={theme.colors.black}
        onPress={() => router.push("/home/notifications")}
      />
    </View>
  );
};

export default NotificationsButton;
