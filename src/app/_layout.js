import { ThemeProvider as RNEThemeProvider, createTheme } from "@rneui/themed";
import { ThemeProvider as RNThemeProvider } from "@react-navigation/native";
import { useColorScheme } from "react-native";
import { ClerkProvider } from "@clerk/clerk-expo";
import { CLERK_PUBLISHABLE_KEY } from "@env";

import InitialLayout from "../components/InitialLayout";
import { tokenCache } from "../utils";
import useCachedResources from "../hooks/useCachedResources";
import {
  getRNElementsTheme,
  getReactNavigationTheme,
} from "../themes/ThemeManager";

const clerkKey = CLERK_PUBLISHABLE_KEY;

const RootLayout = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const RNETheme = createTheme(getRNElementsTheme(colorScheme));
  const RNTheme = getReactNavigationTheme(colorScheme);

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <ClerkProvider publishableKey={clerkKey} tokenCache={tokenCache}>
      <RNThemeProvider value={RNTheme}>
        <RNEThemeProvider theme={RNETheme}>
          <InitialLayout />
        </RNEThemeProvider>
      </RNThemeProvider>
    </ClerkProvider>
  );
};

export default RootLayout;
