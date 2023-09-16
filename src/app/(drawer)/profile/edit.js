import { useState } from "react";
import { router } from "expo-router";
import { ScrollView, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Formik } from "formik";
import * as Yup from "yup";
import "yup-phone-lite";
import { useUser } from "@clerk/clerk-expo";
import { useTheme } from "@rneui/themed";

import StackScreen from "../../../components/stackScreen/StackScreen";
import {
  FormField,
  SubmitButton,
  ErrorMessage,
} from "../../../components/forms";
import useStyles from "../../../styles/profile.edit.syles";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First name"),
  lastName: Yup.string().label("Last name"),
  address: Yup.string().label("Last name"),
  phone: Yup.string().phone(["US", "JM"], "Phone number is not valid"),
});

const EditProfile = () => {
  const styles = useStyles();
  const { theme } = useTheme();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { user } = useUser();

  const handleSubmit = async (userInfo) => {
    setLoading(true);
    setError(null);

    try {
      await user.update({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        unsafeMetadata: {
          phone: userInfo.phone ?? undefined,
          address: userInfo.address ?? undefined,
        },
      });
      router.back();
    } catch (err) {
      setError(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Spinner visible={loading} />
      <StackScreen title="Edit Profile">
        <ScrollView>
          <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
            <Formik
              initialValues={{
                firstName: user.firstName,
                lastName: user.lastName,
                address: user.unsafeMetadata?.address,
                phone: user.unsafeMetadata?.phone,
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
              enableReinitialize
            >
              {(_) => (
                <>
                  <ErrorMessage error={error} visible={error} />
                  <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="firstName"
                    textContentType="givenName"
                    label="First Name"
                    labelStyle={styles.label}
                  />
                  <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    name="lastName"
                    textContentType="familyName"
                    label="Last Name"
                    labelStyle={styles.label}
                  />
                  <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    name="address"
                    textContentType="familyName"
                    label="Address"
                    labelStyle={styles.label}
                    rightIcon={
                      <Ionicons
                        name="location-outline"
                        size={24}
                        color={theme.colors.black}
                        onPress={() => alert("YES")}
                      />
                    }
                  />
                  <FormField
                    keyboardType="phone-pad"
                    autoCorrect={false}
                    name="phone"
                    textContentType="telephoneNumber"
                    label="Phone"
                    labelStyle={styles.label}
                  />
                  <SubmitButton title="Save" />
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </StackScreen>
    </>
  );
};

export default EditProfile;
