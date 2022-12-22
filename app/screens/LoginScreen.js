import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

import AppTextInput from "../components/AppTextInput";
import AppScreen from "../components/AppScreen";
import AppColor from "../config/AppColor";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import DataManager from "../config/DataManager";

const schema = Yup.object().shape({
  //to ensure the input of email and password are correct
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).max(8).label("Password"),
});

const createUser = ({ email }) => {
  //prepare the user id to pass to home screen
  let commonData = DataManager.getInstance();
  let userID = getUser({ email }).id;
  commonData.setUserID(userID);
};

let users = [
  {
    id: "user1",
    name: "Jason Momoa",
    email: "jm@gmail.com",
    password: "1234",
    image: require("../assets/user1.jpeg"),
  },
  {
    id: "user2",
    name: "Chris Hemsworth",
    email: "ch@gmail.com",
    password: "2345",
    image: require("../assets/user2.jpeg"),
  },
];

const validateUser = ({ email, password }) => {
  //to validate if the user exist
  return (
    users.filter((user) => user.email === email && user.password === password)
      .length > 0
  );
};

const getUser = ({ email }) => {
  return users.find((user) => user.email === email);
};

const addUser = (params) => {
  //adding new user from the data passed from Register screen
  const newUser = {
    id: params.paramsID,
    name: params.paramsName,
    email: params.paramsEmail,
    password: params.paramsPass,
    image: require("../assets/default-user.png"),
  };
  users.push(newUser);
};

function LoginScreen({ navigation, route }) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.welcomeContainer}>
        <MaterialCommunityIcons
          name="instagram"
          size={60}
          color={AppColor.primaryColor}
        />
      </View>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          console.log(route.params);
          if (
            route.params &&
            !users.filter((user) => user.userID !== route.params.paramsID)
          ) {
            addUser(route.params);
          }
          console.log(users);
          if (validateUser(values)) {
            resetForm();
            createUser(values);
            navigation.navigate("Home", {
              screen: "Home",
              params: {
                screen: "Home",
                params: {
                  paramsEmail: values.email,
                  paramsName: getUser(values).name,
                  paramsImage: getUser(values).image,
                },
              },
            });
          } else {
            resetForm();
            alert("Invalid Login Details");
          }
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
                icon="email"
                placeholder="Email Address"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={values.email}
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
                //onChangeText={(userInputEmail) => setEmail(userInputEmail)}
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
                //onChangeText={(userInputPassword) => setPassword(userInputPassword)}
              />
              {touched.password && (
                <AppText style={{ color: "red", fontSize: 16 }}>
                  {errors.password}
                </AppText>
              )}
            </View>
            <AppButton
              title="Log in"
              //onPress={() => console.log(email, password)}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </AppScreen>
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

export default LoginScreen;

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
