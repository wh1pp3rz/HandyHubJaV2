import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  logoText: {
    fontSize: 36,
    fontFamily: theme.FONT.bold,
    color: theme.colors.primary,
    fontWeight: "600",
    alignSelf: "center",
  },
  image: {
    overflow: "hidden",
    width: 120,
    height: 120,
  },
}));

export default useStyles;
