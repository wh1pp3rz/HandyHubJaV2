import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    borderRadius: 10,
    backgroundColor: theme.colors.cardColor,
  },
  banner: {
    width: "100%",
    height: 52,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  avatar: {
    position: "absolute",
    top: 35,
    left: 16,
  },
  avatarContainer: {
    borderWidth: 1,
    borderColor: theme.colors.black,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  name: {
    marginLeft: 75,
    fontSize: 16,
    fontFamily: theme.FONT.bold,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    marginRight: 30,
  },
  ratingText: {
    fontSize: 14,
    fontFamily: theme.FONT.regular,
    color: theme.colors.sandybrown,
    paddingLeft: 5,
  },
  description: {
    padding: 16,
    fontSize: 12,
    fontFamily: theme.FONT.regular,
    color: theme.colors.profileText,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 16,
  },
  contactBtnContainer: {
    borderRadius: 29,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  contactBtnText: {
    fontSize: 14,
    fontFamily: theme.FONT.regular,
  },
  divider: {
    color: "red",
    marginVertical: 0,
    paddingVertical: 0,
  },
}));

export default useStyles;
