import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
    padding: 16,
    flexDirection: "row",
    borderRadius: 10,
    marginTop: 30,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: theme.FONT.medium,
    color: theme.colors.cardColor,
  },
}));

export default useStyles;
