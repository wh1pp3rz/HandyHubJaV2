import { Drawer } from "expo-router/drawer";
import { useAuth } from "@clerk/clerk-expo";

import AppIcons from "../../components/AppIcon";
import CustomDrawer from "../../components/customDrawer/CustomDrawer";

const DrawerLayout = () => {
  const { isSignedIn } = useAuth();
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        swipeEdgeWidth: 0,
      }}
    >
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ color }) => (
            <AppIcons name="home" size={24} color={color} />
          ),
        }}
        redirect={!isSignedIn}
      />
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Profile",
          drawerIcon: ({ color }) => (
            <AppIcons name="profile" size={24} color={color} />
          ),
        }}
        redirect={!isSignedIn}
      />
      <Drawer.Screen
        name="setting"
        options={{
          drawerLabel: "Settings",
          drawerIcon: ({ color }) => (
            <AppIcons name="settings" size={24} color={color} />
          ),
        }}
        redirect={!isSignedIn}
      />
      <Drawer.Screen
        name="screen1"
        options={{
          drawerLabel: "Menu 1",
          drawerIcon: ({ color }) => (
            <AppIcons name="menuItem" size={24} color={color} />
          ),
        }}
        redirect={!isSignedIn}
      />
      <Drawer.Screen
        name="screen2"
        options={{
          drawerLabel: "Menu 2",
          drawerIcon: ({ color }) => (
            <AppIcons name="menuItem" size={24} color={color} />
          ),
        }}
        redirect={!isSignedIn}
      />
      <Drawer.Screen
        name="screen3"
        options={{
          drawerLabel: "Menu 3",
          drawerIcon: ({ color }) => (
            <AppIcons name="menuItem" size={24} color={color} />
          ),
        }}
        redirect={!isSignedIn}
      />
    </Drawer>
  );
};

export default DrawerLayout;
