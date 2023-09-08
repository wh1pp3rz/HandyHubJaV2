import { View, SafeAreaView } from "react-native";
import { useTheme } from "@rneui/themed";
import { Drawer } from "expo-router/drawer";

import useStyles from "./DrawerScreen.styles";
import MenuButton from "../menuButton/MenuButton";

const renderMenuButton = () => <MenuButton />;

const DrawerScreen = ({
  style = {},
  headerRight,
  title,
  headerTitle,
  children,
}) => {
  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <>
      <Drawer.Screen
        options={{
          headerShown: true,
          headerTintColor: theme.colors.black,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerShadowVisible: false,
          title: title,
          headerLeft: renderMenuButton,
          headerRight: headerRight ? headerRight : undefined,
          headerTitle: headerTitle,
        }}
      />
      <SafeAreaView style={styles.container}>
        <View style={[styles.screenContent, style]}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default DrawerScreen;
