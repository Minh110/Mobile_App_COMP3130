import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppColor from "../config/AppColor";
import AppText from "./AppText";

function AppCard({ category, title, subtitle, image, onPress, onSwipeLeft }) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={onSwipeLeft}>
        <TouchableHighlight
          onPress={onPress}
          underlayColor={AppColor.otherColorLite}
        >
          <View style={styles.container}>
            {isFinite(image) ? (
              <Image source={image} style={styles.image} />
            ) : (
              <Image source={{ uri: image }} style={styles.image} />
            )}
            <AppText style={styles.title}> {title} </AppText>
            <AppText style={styles.subtitle}>{subtitle} </AppText>
            <AppText style={styles.subtitle}>{category} </AppText>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.otherColorLite,
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 25,
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
  },
});
export default AppCard;
