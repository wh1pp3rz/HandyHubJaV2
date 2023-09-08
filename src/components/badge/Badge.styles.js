import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.badge,
    padding: 5,
    borderRadius: 25,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 14,
    fontFamily: theme.FONT.regular,
    color: theme.colors.black,
    textTransform: "capitalize",
  },
}));

export default useStyles;
