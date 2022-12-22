import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../components/AppTextInput";
import AppScreen from "../components/AppScreen";
import AppColor from "../config/AppColor";
import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../components/AppText";

const schema = Yup.object().shape({
  userID: Yup.string().required().label("UserID"),
  userName: Yup.string().required().label("UserName"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(8).label("Password"),
});

function RegisterScreen({ navigation }) {
  return (
    <KeyboardAwareScrollView>
      <AppScreen style={styles.container}>
        <View style={styles.welcomeContainer}>
          <MaterialCommunityIcons
            name="instagram"
            size={60}
            color={AppColor.primaryColor}
          />
        </View>
        <Formik
          initialValues={{
            userID: "",
            userName: "",
            email: "",
            password: "",
          }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm();
            navigation.navigate("Login", {
              paramsID: values.userID,
              paramsName: values.userName,
              paramsEmail: values.email,
              paramsPass: values.password,
            });
          }}
          validationSchema={schema}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <View style={styles.textInputContainer}>
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="account"
                  placeholder="User ID"
                  textContentType="emailAddress"
                  onBlur={() => setFieldTouched("userID")}
                  onChangeText={handleChange("userID")}
                />
                {touched.userID && (
                  <AppText style={{ color: "red", fontSize: 16 }}>
                    {errors.userID}
                  </AppText>
                )}

                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="account"
                  placeholder="Full Name"
                  textContentType="emailAddress"
                  onBlur={() => setFieldTouched("userName")}
                  onChangeText={handleChange("userName")}
                />
                {touched.userName && (
                  <AppText style={{ color: "red", fontSize: 16 }}>
                    {errors.userName}
                  </AppText>
                )}

                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="email"
                  placeholder="Email Address"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  value={values.email}
                  onBlur={() => setFieldTouched("email")}
                  onChangeText={handleChange("email")}
                />
                {touched.email && (
                  <AppText style={{ color: "red", fontSize: 15 }}>
                    {errors.email}
                  </AppText>
                )}

                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  placeholder="Password"
                  secureTextEntry={true}
                  value={values.password}
                  onBlur={() => setFieldTouched("password")}
                  onChangeText={handleChange("password")}
                />
                {touched.password && (
                  <AppText style={{ color: "red", fontSize: 16 }}>
                    {errors.password}
                  </AppText>
                )}
              </View>
              <AppButton title="Sign up" onPress={handleSubmit} />
            </>
          )}
        </Formik>
      </AppScreen>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.otherColor,
    padding: 25,
  },
  welcomeContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  textInputContainer: {
    marginVertical: 50,
  },
});

export default RegisterScreen;

/*
    <View style={styles.container}>
      <AppTextInput icon="email" placeholder="Email address" />
    </View>
 */
/*
<TextInput
  placeholder="type your fav GOT character"
  secureTextEntry={true}
  keyboardType="phone-pad"
/>
*/
