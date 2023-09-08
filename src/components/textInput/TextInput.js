import React, { useState } from "react";
import { Input } from "@rneui/base";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { makeStyles, useTheme } from "@rneui/themed";

import AppIcons from "../AppIcon";
import useStyles from "./TextInput.styles";

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

export default TextInput;
