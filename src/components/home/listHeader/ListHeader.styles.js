import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    marginHorizontal: 5,
  },
  inputContainer: {
    borderRadius: 54,
    backgroundColor: theme.mode === "dark" ? "#2f2f2f" : "#fff",
    paddingVertical: 0,
    height: 48,
  },
  headerText: {
    fontFamily: theme.FONT.bold,
    fontSize: 20,
    paddingLeft: 10,
  },
  tabsContainer: {
    marginTop: 16,
  },
}));

export default useStyles;
