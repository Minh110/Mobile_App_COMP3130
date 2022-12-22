import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

import AppText from "./AppText";
import AppIcon from "./AppIcon";

function AppPickerItem({ onPress, label, icon, backgroundColor }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppIcon
        name={icon}
        iconColor="white"
        backgroundColor={backgroundColor}
      />
      <AppText style={{ fontSize: 15 }}> {label} </AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    fontSize: 25,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "33%",
    alignItems: "center",
  },
});
export default AppPickerItem;
