import { useState } from "react";
import { useSignUp } from "@clerk/clerk-expo";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { Link } from "expo-router";
import Spinner from "react-native-loading-spinner-overlay";
import { Text } from "@rneui/base";
import * as Yup from "yup";
import { Formik } from "formik";

import useStyles from "../../styles/register.styles";
import { ErrorMessage, FormField, SubmitButton } from "../../components/forms";
import Logo from "../../components/logo/Logo";
import SectionHeader from "../../components/common/SectionHeader";

const signUpvalidationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  emailAddress: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

const verfiyValidationSchema = Yup.object().shape({
  code: Yup.number().required().label("Code"),
});

const Register = () => {
  const styles = useStyles();
  const { isLoaded, signUp, setActive } = useSignUp();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [pendingVerification, setPendingVerification] = useState(false);

  const onSignUpPress = async (data) => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    setError(null);

    try {
      await signUp.create(data);
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
    } catch (err) {
      setError(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  const onPressVerify = async (data) => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification(data);

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err) {
      setError(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerBackVisible: !pendingVerification }} />
      <Spinner visible={loading} />
      <ScrollView>
        <View style={styles.content}>
          <Logo />

          {!pendingVerification && (
            <>
              <SectionHeader>Sign Up</SectionHeader>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  emailAddress: "",
                  password: "",
                }}
                onSubmit={onSignUpPress}
                validationSchema={signUpvalidationSchema}
              >
                {(_) => (
                  <>
                    <ErrorMessage error={error} visible={error} />
                    <FormField
                      autoCapitalize="none"
                      autoCorrect={false}
                      icon="email"
                      keyboardType="email-address"
                      name="firstName"
                      placeholder="First Name"
                      textContentType="givenName"
                    />
                    <FormField
                      autoCapitalize="none"
                      autoCorrect={false}
                      icon="email"
                      keyboardType="email-address"
                      name="lastName"
                      placeholder="Last Name"
                      textContentType="familyName"
                    />
                    <FormField
                      autoCapitalize="none"
                      autoCorrect={false}
                      icon="email"
                      keyboardType="email-address"
                      name="emailAddress"
                      placeholder="Email Address"
                      textContentType="emailAddress"
                    />
                    <FormField
                      autoCapitalize="none"
                      autoCorrect={false}
                      icon="lock"
                      name="password"
                      placeholder="Password"
                      secure
                      textContentType="password"
                    />
                    <SubmitButton title="Sign Up" />
                  </>
                )}
              </Formik>

              <View style={styles.createAccountContainer}>
                <Text style={styles.noAccountText}>
                  Already have an account?{" "}
                </Text>
                <Link href="/login">
                  <Text style={styles.createAccountLink}>Login</Text>
                </Link>
              </View>
            </>
          )}

          {pendingVerification && (
            <>
              <SectionHeader>Verify Email</SectionHeader>
              <Formik
                initialValues={{ code: "" }}
                onSubmit={onPressVerify}
                validationSchema={verfiyValidationSchema}
              >
                {(_) => (
                  <>
                    <ErrorMessage error={error} visible={error} />
                    <FormField
                      autoCorrect={false}
                      icon="email"
                      keyboardType="numeric"
                      maxLength={6}
                      name="code"
                      placeholder="Code"
                      textContentType="oneTimeCode"
                    />
                    <SubmitButton title="Verify Email" />
                  </>
                )}
              </Formik>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
