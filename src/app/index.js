import { useRootNavigationState, Redirect } from "expo-router";

const StartPage = () => {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;
  return <Redirect href="/(main)/home" />;
};

export default StartPage;
