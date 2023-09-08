import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
  },
  forgotPasswordLink: {
    alignSelf: "flex-end",
    fontSize: theme.SIZES.medium,
    fontStyle: "italic",
    fontFamily: theme.FONT.italic,
    marginRight: 10,
  },
  linkText: {
    color: theme.colors.black,
  },
  noAccountText: {
    color: theme.colors.black,
    fontSize: 16,
    fontFamily: theme.FONT.regular,
  },
  createAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 16,
    marginTop: 30,
  },
  createAccountLink: {
    fontSize: 16,
    fontFamily: theme.FONT.bold,
    color: theme.colors.primary,
  },
}));

export default useStyles;
