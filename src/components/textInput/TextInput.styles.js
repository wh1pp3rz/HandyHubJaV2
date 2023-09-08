import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    alignSelf: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.inputBorder,
    borderRadius: 10,
    backgroundColor: theme.colors.cardColor,
    width: "100%",
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
}));

export default useStyles;
