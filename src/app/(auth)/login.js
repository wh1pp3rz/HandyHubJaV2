import { useState } from "react";
import { useSignIn } from "@clerk/clerk-expo";
import { View, SafeAreaView, ScrollView } from "react-native";
import { Link } from "expo-router";
import Spinner from "react-native-loading-spinner-overlay";
import { Text } from "@rneui/base";
import * as Yup from "yup";
import { Formik } from "formik";

import getLoginStyles from "../../styles/login.styles";
import { ErrorMessage, FormField, SubmitButton } from "../../components/forms";
import Logo from "../../components/logo/Logo";
import SectionHeader from "../../components/common/SectionHeader";
import Line from "../../components/common/Line";
import SocialLoginButton from "../../components/socialLoginButton/SocialLoginButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

const Login = () => {
  const styles = getLoginStyles();
  const { signIn, setActive, isLoaded } = useSignIn();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const onSignInPress = async (data) => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const completeSignIn = await signIn.create({
        identifier: data.email,
        password: data.password,
      });

      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err) {
      setError(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={loading} />
      <ScrollView>
        <View style={styles.content}>
          <Logo />
          <SectionHeader>Login</SectionHeader>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={onSignInPress}
            validationSchema={validationSchema}
          >
            {(_) => (
              <>
                <ErrorMessage error={error} visible={error} />
                <FormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="email"
                  keyboardType="email-address"
                  name="email"
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
                <Link href="/reset" style={styles.forgotPasswordLink}>
                  <Text style={styles.linkText}>Forgot password?</Text>
                </Link>
                <SubmitButton title="Login" />
              </>
            )}
          </Formik>
          <Line
            text="or continue with"
            containerStyle={{ marginHorizontal: 16 }}
          />
          <View style={styles.socialButtons}>
            <SocialLoginButton
              type="google"
              setError={setError}
              containerStyle={styles.socialButtonContainer}
            />

            <SocialLoginButton
              type="apple"
              setError={setError}
              containerStyle={styles.socialButtonContainer}
            />
          </View>
          <View style={styles.createAccountContainer}>
            <Text style={styles.noAccountText}>Don't have an account? </Text>
            <Link href="/register">
              <Text style={styles.createAccountLink}>Create Account</Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
