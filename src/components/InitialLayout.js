import { useEffect } from "react";
import { Slot, useRouter, useSegments } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const InitialLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!isSignedIn && !inAuthGroup) {
      router.replace("/login");
    } else if (isSignedIn && inAuthGroup) {
      router.replace("/");
    }
  }, [isSignedIn, segments]);

  return <Slot />;
};

export default InitialLayout;
