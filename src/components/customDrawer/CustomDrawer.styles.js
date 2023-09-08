import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.mode === "dark" ? "#2f2f2f" : "#ffffff",
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.white,
    paddingTop: 0,
    marginTop: 60,
  },
  header: {
    height: 200,
    backgroundColor: theme.mode === "dark" ? "#383838" : "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    height: 88,
    width: 88,
    borderRadius: 15,
    marginBottom: 10,
    borderColor: theme.colors.primary,
    borderWidth: 1,
    overflow: "hidden",
  },
  name: {
    color: theme.colors.black,
    fontSize: 18,
    fontFamily: theme.FONT.bold,
    fontWeight: "600",
    marginBottom: 5,
  },
  extraInfo: {
    color:
      theme.mode === "dark" ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)",
    fontSize: 14, // you can adjust this
    fontFamily: theme.FONT.regular, // you can adjust this
    textAlign: "center", // ensures that the text is centered
  },
  menuList: {
    flex: 1,
    backgroundColor: theme.mode === "dark" ? "#2f2f2f" : "#ffffff",
    paddingTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  menuText: (focused) => ({
    flex: 1,
    marginLeft: 10,
    fontFamily: focused ? theme.FONT.bold : theme.FONT.regular,
    color: theme.colors.primary,
    fontSize: 16,
  }),
  separator: {
    height: 1,
    backgroundColor:
      theme.mode === "dark"
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(0, 0, 0, 0.08)",
    marginLeft: 10,
    marginRight: 10,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 15,
    //borderTopWidth: 1,
    borderTopColor: "#e0e0e0", // or any desired separator color
  },
  logoutText: {
    color: "#eb5757",
    fontSize: 16,
    fontFamily: theme.FONT.bold,
    fontWeight: "600",
    marginLeft: 10, // To give some space between the icon and the text
  },
  footer: {
    backgroundColor: theme.mode === "dark" ? "#2f2f2f" : "#ffffff",
    marginBottom: 60,
  },
}));

export default useStyles;
