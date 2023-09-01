import lightTheme from "./lightTheme";
import darkTheme from "./darkTheme";
import { FONT, SIZES, SHADOWS } from "./common";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";

const getBaseTheme = (themeType) => {
  switch (themeType) {
    case "light":
      return lightTheme;
    case "dark":
      return darkTheme;
    default:
      return lightTheme;
  }
};

export const getRNElementsTheme = (themeType) => {
  const themeColors = getBaseTheme(themeType);
  return {
    mode: themeType,
    FONT,
    SIZES,
    SHADOWS,
    [`${themeType}Colors`]: { ...themeColors.colors },
  };
};

export const getReactNavigationTheme = (themeType) => {
  const base = themeType === "dark" ? DarkTheme : DefaultTheme;
  const customColors = getBaseTheme(themeType).colors;

  return {
    ...base,
    colors: {
      ...base.colors,
      primary: customColors.primary,
      background: customColors.background,
      text: customColors.text,
    },
  };
};
