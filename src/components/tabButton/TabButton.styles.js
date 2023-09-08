import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    alignSelf: "center",
  },
  tab: (active) => ({
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 36,
    borderWidth: active ? 0 : 1,
    borderColor: theme.mode === "dark" ? "rgba(227, 229, 232, 0)" : "#e3e5e8",
    backgroundColor: active
      ? theme.colors.primary
      : theme.mode === "dark"
      ? "#2f2f2f"
      : "#fff",
  }),
  tabText: (active) => ({
    fontFamily: theme.FONT.regular,
    textTransform: "capitalize",
    color:
      theme.mode === "dark"
        ? active
          ? "#2f2f2f"
          : "rgba(255, 255, 255, 0.6)"
        : active
        ? "#fff"
        : "#828282",
    fontSize: 16,
  }),
}));

export default useStyles;
