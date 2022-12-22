import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

import AppColor from "../config/AppColor";

function AppButton({ title, color = "primaryColor", onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[styles.button, { backgroundColor: AppColor[color] }, style]}
      >
        <Text style={styles.text}> {title} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: AppColor.secondaryColor,
    borderRadius: 20,
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: AppColor.otherColor,
    fontSize: 15,
    textTransform: "uppercase",
  },
});
export default AppButton;
