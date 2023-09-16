import React from "react";
import { SafeAreaView, View } from "react-native";
import { Stack } from "expo-router";

import useStyles from "./StackScreen.styles";

const StackScreen = ({ title, children, style = {} }) => {
  const styles = useStyles();
  return (
    <>
      <Stack.Screen
        options={{
          title,
        }}
      />
      <SafeAreaView style={[styles.container, style]}>
        <View style={[styles.screenContent, style]}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default StackScreen;
