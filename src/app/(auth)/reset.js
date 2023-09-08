import { useState } from "react";
import { useSignIn } from "@clerk/clerk-expo";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Stack } from "expo-router";
import Spinner from "react-native-loading-spinner-overlay";
import * as Yup from "yup";
import { Formik } from "formik";

import useStyles from "../../styles/reset.styles";
import { ErrorMessage, FormField, SubmitButton } from "../../components/forms";
import Logo from "../../components/logo/Logo";
import SectionHeader from "../../components/common/SectionHeader";

const requestValidationSchema = Yup.object().shape({
  emailAddress: Yup.string().required().email().label("Email"),
});

const resetValidationSchema = Yup.object().shape({
  code: Yup.number().required().label("Code"),
  password: Yup.string().required().label("Password"),
});

const Reset = () => {
  const styles = useStyles();
  const { signIn, setActive } = useSignIn();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [successfulCreation, setSuccessfulCreation] = useState(false);

  const onRequestReset = async (data) => {
    setLoading(true);
    setError(null);

    try {
      await signIn.create({
        strategy: "reset_password_email_code",
        identifier: data.emailAddress,
      });
      setSuccessfulCreation(true);
    } catch (err) {
      setError(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  const onReset = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const result = await signIn.attemptFirstFactor({
        strategy: "reset_password_email_code",
        ...data,
      });
      alert("Password reset successfully");

      // Set the user session active, which will log in the user automatically
      await setActive({ session: result.createdSessionId });
    } catch (err) {
      setError(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerBackVisible: !successfulCreation }} />
      <ScrollView>
        <Spinner visible={loading} />

        <View style={styles.content}>
          <Logo />

          {!successfulCreation && (
            <>
              <SectionHeader>Request Reset</SectionHeader>
              <Formik
                initialValues={{ emailAddress: "" }}
                onSubmit={onRequestReset}
                validationSchema={requestValidationSchema}
              >
                {(_) => (
                  <>
                    <ErrorMessage error={error} visible={error} />
                    <FormField
                      autoCapitalize="none"
                      autoCorrect={false}
                      icon="email"
                      keyboardType="email-address"
                      name="emailAddress"
                      placeholder="Email Address"
                      textContentType="emailAddress"
                    />
                    <SubmitButton title="Send Reset Email" />
                  </>
                )}
              </Formik>
            </>
          )}

          {successfulCreation && (
            <>
              <SectionHeader>Verify Email</SectionHeader>
              <Formik
                initialValues={{ code: "", password: "" }}
                onSubmit={onReset}
                validationSchema={resetValidationSchema}
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
                    <FormField
                      autoCapitalize="none"
                      autoCorrect={false}
                      icon="lock"
                      name="password"
                      placeholder="Password"
                      secure
                      textContentType="password"
                    />
                    <SubmitButton title="Set new Password" />
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

export default Reset;
