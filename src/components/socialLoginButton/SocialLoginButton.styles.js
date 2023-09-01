import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.inputBorder,
    borderStyle: "solid",
    backgroundColor: theme.colors.cardColor,
    borderRadius: 10,
  },
  titleStyle: {
    color: theme.colors.black,
    marginLeft: 10,
    textAlign: "center",
    fontFamily: theme.FONT.regular,
    fontSize: 16,
    textTransform: "capitalize",
  },
}));

export default useStyles;
