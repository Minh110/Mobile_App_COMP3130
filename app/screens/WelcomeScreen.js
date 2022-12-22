import React from "react";
import { View, StyleSheet, ImageBackground, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppColor from "../config/AppColor";
import AppButton from "../components/AppButton";

const blurRadiusValue = Platform.OS === "android" ? 0.7 : 5.5;

function WelcomeScreen({ navigation }) {
  return (
    <AppScreen>
      <ImageBackground
        source={require("../assets/background.webp")}
        style={styles.background}
        blurRadius={blurRadiusValue}
      >
        <View style={styles.welcomeContainer}>
          <MaterialCommunityIcons
            name="instagram"
            size={60}
            color={AppColor.primaryColor}
          />
          <AppText> Relive your best memories </AppText>
        </View>

        <View style={styles.buttonsContainer}>
          <AppButton
            title="Login"
            onPress={() => navigation.navigate("Login")}
          />
          <AppButton
            title="Register"
            color="secondaryColor"
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </ImageBackground>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  welcomeContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    justifyContent: "space-between",
  },
  buttonsContainer: {
    marginTop: 350,
    marginEnd: 10,
    flexDirection: "column",
    justifyContent: "space-between",
    height: 150,
    alignSelf: "flex-end",
    width: "50%",
  },
});
export default WelcomeScreen;
