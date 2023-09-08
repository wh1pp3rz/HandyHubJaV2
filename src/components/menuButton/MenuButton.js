import { DrawerToggleButton } from "@react-navigation/drawer";
import { useTheme } from "@rneui/themed";

const MenuButton = () => {
  const { theme } = useTheme();
  return <DrawerToggleButton tintColor={theme.colors.black} />;
};

export default MenuButton;
