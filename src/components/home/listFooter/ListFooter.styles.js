import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    marginTop: 12,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  paginationTextContainer: {
    width: 30,
    height: 30,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
  },
  paginationText: {
    fontFamily: theme.FONT.bold,
    fontSize: 16,
    color: theme.colors.primary,
  },
  paginationButton: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
  },
  paginationButtonDisabled: {
    width: 30,
    height: 30,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AED6F1",
    opacity: 0.7,
  },
}));

export default useStyles;
