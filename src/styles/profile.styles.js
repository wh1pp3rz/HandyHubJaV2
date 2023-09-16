import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    //alignItems: "center",
    paddingTop: 20,
    width: "100%",
  },
  imageButton: {
    width: 80, // Increased to accommodate the space
    height: 80, // Increased to accommodate the space
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: theme.colors.primary, // Adjust color as needed
    borderStyle: "dotted",
    position: "relative",
    padding: 4, // This creates the gap
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
    position: "absolute",
    zIndex: 1,
  },
  overlay: {
    position: "absolute",
    zIndex: 2,
    bottom: 5,
    //left: 35,
  },
  nameText: {
    fontFamily: theme.FONT.bold,
    fontSize: 16,
    //textAlign: "center",
    marginTop: 20,
  },
  infoBox: {
    width: "100%",
    maxWidth: "100%", // Just to make sure
    backgroundColor: theme.mode === "dark" ? "#2F2F2F" : "#FFFFFF",
    borderRadius: 10,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  infoText: {
    fontFamily: theme.FONT.regular,
    fontSize: 14,
    marginLeft: 10,
    lineHeight: 20,
    color: theme.colors.black,
  },
  logoutText: {
    fontFamily: theme.FONT.bold,
    fontWeight: "600",
    fontSize: 14,
    marginLeft: 10,
    lineHeight: 20,
    color: theme.colors.red,
  },
  separator: {
    height: 1,
    backgroundColor: theme.colors.black,
    width: "100%",
    marginVertical: 8,
    opacity: 0.1,
  },
  placeholderText: {
    marginLeft: 8,
    color: theme.colors.placeholder,
  },
  wrapper: {
    width: "100%",
    alignItems: "center",
    padding: 16,
  },
}));

export default useStyles;
