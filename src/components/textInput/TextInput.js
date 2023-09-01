import React, { useState } from "react";
import { Input } from "@rneui/base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { makeStyles, useTheme } from "@rneui/themed";

import AppIcons from "../AppIcon";

const TextInput = ({
  align = "center",
  icon,
  secure = false,
  containerStyle = {},
  inputContainerStyle = {},
  ...otherProps
}) => {
  const [revealInput, setRevealInput] = useState(false);
  const styles = useStyles();
  const { theme } = useTheme();

  return (
    <Input
      containerStyle={[styles.container, containerStyle]}
      inputContainerStyle={[styles.inputContainer, inputContainerStyle]}
      inputStyle={[styles.text, { textAlignVertical: align }]}
      leftIcon={
        icon ? (
          <AppIcons color={theme.colors.placeHolder} name={icon} size={24} />
        ) : undefined
      }
      rightIcon={
        secure ? (
          <MaterialCommunityIcons
            color={theme.colors.placeHolder}
            name={revealInput ? "eye" : "eye-off"}
            onPress={() => setRevealInput(!revealInput)}
            size={30}
            style={styles.revealInputIcon}
          />
        ) : undefined
      }
      secureTextEntry={secure && !revealInput}
      placeholderTextColor={theme.colors.placeHolder}
      {...otherProps}
    />
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    //background: theme.colors.white,
    alignSelf: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    //marginVertical: 5,
    borderWidth: 1,
    borderColor: theme.colors.inputBorder,
    borderRadius: 10,
    backgroundColor: theme.colors.cardColor,
    width: "100%",
    // padding: 16,

    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  revealInputIcon: {
    paddingLeft: 5,
  },
  text: {
    color: theme.colors.text,
    fontFamily: theme.FONT.regular,
    paddingHorizontal: 10,
    flex: 1,
  },
  label: {
    color: "red", //theme.colors.inputLabel,
    fontFamily: theme.FONT.regular,
  },
}));

export default TextInput;
