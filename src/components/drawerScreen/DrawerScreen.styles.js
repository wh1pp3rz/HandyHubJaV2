import Constants from "expo-constants";
import { makeStyles } from "@rneui/themed";

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  screenContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
