import { memo } from "react";
import { View } from "react-native";
import { Card, Avatar, Text, Button, useTheme } from "@rneui/themed";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Badge from "../../badge/Bade";
import useStyles from "./ProflleCard.styles";
import images from "../../../constants/images";

const ProfileCard = memo(({ profile }) => {
  const styles = useStyles();
  const { theme } = useTheme();
  const category = profile.categories[0]?.name?.toLowerCase() || "";

  return (
    <Card containerStyle={styles.container}>
      <Card.Image source={images.categories[category]} style={styles.banner} />
      <Avatar
        size={48}
        rounded
        source={profile.avatar ? { uri: profile.avatar } : {}}
        containerStyle={styles.avatar}
        overlayContainerStyle={styles.avatarContainer}
      />

      <View style={styles.details}>
        <Text style={styles.name}>{profile.name}</Text>
        <View style={styles.ratingContainer}>
          <MaterialCommunityIcons name="star" size={12} color="orange" />
          <Text style={styles.ratingText}>{profile.rating}</Text>
        </View>
      </View>

      <Text style={styles.description}>{profile.description}</Text>
      <Card.Divider color={theme.colors.grey1} />

      <View style={styles.footer}>
        <Badge value={profile.categories[0]?.name} />

        <Button
          title="Contact"
          onPress={() => {}}
          buttonStyle={styles.contactBtnContainer}
          titleStyle={styles.contactBtnText}
        />
      </View>
    </Card>
  );
});

export default ProfileCard;
