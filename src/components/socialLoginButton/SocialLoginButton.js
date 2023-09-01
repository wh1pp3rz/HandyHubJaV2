import { useCallback } from "react";
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { Button } from "@rneui/base";
import { useTheme } from "@rneui/themed";

import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import useStyles from "./SocialLoginButton.styles";
import AppIcons from "../AppIcon";

WebBrowser.maybeCompleteAuthSession();

const SocialLoginButton = ({ type, setError, ...otherProps }) => {
  useWarmUpBrowser();
  const styles = useStyles();
  const { theme } = useTheme();
  const { startOAuthFlow } = useOAuth({ strategy: `oauth_${type}` });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, setActive, signUp } = await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        setError("failed to sign in or sing up, check requirements");
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Button
      title={type}
      icon={<AppIcons name={type} color={theme.colors.black} />}
      titleStyle={styles.titleStyle}
      buttonStyle={styles.container}
      onPress={onPress}
      {...otherProps}
    />
  );
};

export default SocialLoginButton;
