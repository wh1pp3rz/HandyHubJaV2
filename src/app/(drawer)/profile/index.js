import React, { useState } from "react";
import { View, Image, TouchableOpacity, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Text, useTheme } from "@rneui/themed";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useAuth, useUser } from "@clerk/clerk-expo";

import DrawerScreen from "../../../components/drawerScreen/DrawerScreen";
import NavigationButton from "../../../components/navigationButton/NavigationButton";
import useStyles from "../../../styles/profile.styles";
import Loader from "../../../components/common/Loader";

const Profile = () => {
  const styles = useStyles();
  const { theme } = useTheme();
  const { signOut } = useAuth();
  const { user } = useUser();

  const doLogout = () => {
    signOut();
  };

  const renderEditButton = () => (
    <NavigationButton
      icon="edit"
      color={theme.colors.primary}
      route="/profile/edit"
    />
  );

  const [loading, setLoading] = useState(false);

  const setProfileImage = async (base64Image) => {
    setLoading(true);
    try {
      await user.setProfileImage({ file: base64Image });
      user.reload();
    } catch (error) {
      console.error(
        "Error while setting profile image:",
        error.errors[0].message
      );
    } finally {
      setLoading(false);
    }
  };

  // Function to handle photo upload
  const handlePhotoUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
      base64: true,
    });

    if (!result.canceled) {
      let base64Image = `data:image/jpg;base64,${result.assets[0].base64}`;
      setProfileImage(base64Image);
    }
  };

  return (
    <DrawerScreen
      title="Profile"
      style={styles.container}
      headerRight={renderEditButton}
    >
      {loading ? (
        <Loader size="large" />
      ) : (
        <ScrollView>
          <View style={styles.wrapper}>
            <TouchableOpacity
              onPress={handlePhotoUpload}
              style={styles.imageButton}
            >
              <Image
                source={user.imageUrl ? { uri: user.imageUrl } : null}
                style={styles.avatar}
              />
              <View style={styles.overlay}>
                <Ionicons
                  name="camera"
                  size={24}
                  color={theme.colors.primary}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.nameText}>{user.fullName}</Text>
            <View style={styles.infoBox}>
              <View style={styles.infoRow}>
                <Ionicons
                  name="location-outline"
                  size={20}
                  color={theme.colors.black}
                />
                <Text style={styles.infoText}>
                  {user.unsafeMetadata?.address || "Address Not Set"}
                </Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.infoRow}>
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={theme.colors.black}
                />
                <Text style={styles.infoText}>
                  {user.primaryEmailAddress.toString()}
                </Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.infoRow}>
                <Ionicons
                  name="call-outline"
                  size={20}
                  color={theme.colors.black}
                />
                <Text style={styles.infoText}>
                  {user.unsafeMetadata?.phone || "Phone Not Set"}
                </Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => {}} style={styles.infoBox}>
              <View style={styles.infoRow}>
                <Ionicons
                  name="alert-circle-outline"
                  size={20}
                  color={theme.colors.black}
                />
                <Text style={styles.infoText}>Report an issue</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.infoBox}>
              <View style={styles.infoRow}>
                <Ionicons
                  name="help-circle-outline"
                  size={20}
                  color={theme.colors.black}
                />
                <Text style={styles.infoText}>Help</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={doLogout} style={styles.infoBox}>
              <View style={styles.infoRow}>
                <Ionicons
                  name="exit-outline"
                  size={20}
                  color={theme.colors.red}
                />
                <Text style={styles.logoutText}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </DrawerScreen>
  );
};

export default Profile;
