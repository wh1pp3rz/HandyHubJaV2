import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  label: {
    fontFamily: theme.FONT.bold,
    fontWeight: "600",
    textAlign: "left",
    fontSize: 18,
    color: theme.colors.black,
    marginBottom: 12,
  },
}));

export default useStyles;
