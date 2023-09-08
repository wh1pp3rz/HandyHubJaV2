import React from "react";
import { View, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text, useTheme } from "@rneui/themed";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { useAuth, useUser } from "@clerk/clerk-expo";

import useStyles from "./CustomDrawer.styles";
import AppIcons from "../AppIcon";

const CustomDrawer = (props) => {
  const styles = useStyles();
  const { theme } = useTheme();

  const { signOut } = useAuth();
  const { user } = useUser();

  const doLogout = () => {
    signOut();
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Image
            source={{ uri: user?.imageUrl }}
            style={styles.avatar}
            contentFit="cover"
          />
          <Text style={styles.name}>
            {user?.fullName || user?.emailAddresses[0].emailAddress}
          </Text>
          <Text style={styles.extraInfo}>Extra Info</Text>
        </View>
        {/* <View style={styles.menuList}>
          <DrawerItemList {...props} />
        </View> */}
        <View style={styles.menuList}>
          {props.state.routes.map((route, index) => {
            const focused = index === props.state.index;
            const label = props.descriptors[route.key].options.drawerLabel;
            const icon = props.descriptors[route.key].options.drawerIcon;
            const IconComponent =
              icon && icon({ color: theme.colors.primary, size: 24 });

            return (
              <React.Fragment key={route.key}>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate(route.name)}
                >
                  <View style={styles.menuItem}>
                    {/* Left Icon */}
                    {IconComponent}

                    {/* Route Name */}
                    <Text style={styles.menuText(focused)}>{label}</Text>

                    {/* Chevron Right Icon */}
                    <MaterialIcons
                      name="chevron-right"
                      size={24}
                      color={theme.colors.primary}
                    />
                  </View>
                </TouchableOpacity>

                {/* Line Separator */}
                {index !== props.state.routes.length - 1 && (
                  <View style={styles.separator} />
                )}
              </React.Fragment>
            );
          })}
        </View>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <TouchableOpacity onPress={doLogout} style={styles.logoutButton}>
          <AppIcons name="logout" size={24} color="#eb5757" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
