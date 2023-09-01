import { useAuth } from "@clerk/clerk-expo";
import { View, Text } from "react-native";
import { Button } from "@rneui/base";

const Profile = () => {
  const { signOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile Screen</Text>
      <Button title="Logout" onPress={() => signOut()} />
    </View>
  );
};

export default Profile;
