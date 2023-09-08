import { useRootNavigationState, Redirect } from "expo-router";

const StartPage = () => {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;
  return <Redirect href="/(drawer)/home" />;
};

export default StartPage;
