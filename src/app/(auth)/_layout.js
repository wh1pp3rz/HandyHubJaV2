import { Stack } from "expo-router/stack";
import { useTheme } from "@rneui/themed";

export default function Layout() {
  const { theme } = useTheme();

  return (
    <Stack
      screenOptions={{
        title: "",
        headerStyle: { backgroundColor: theme.colors.background },
        headerShadowVisible: false,
      }}
    />
  );
}
