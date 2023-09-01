import { makeStyles } from "@rneui/themed";

const getLoginStyles = makeStyles((theme) => ({
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
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  socialButtonContainer: {
    flex: 1,
    marginHorizontal: 10,
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

export default getLoginStyles;
