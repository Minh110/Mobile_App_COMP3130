import React, { useState } from "react";
import { StyleSheet, View, Image } from "react-native";

import AppScreen from "../components/AppScreen";
import AppColor from "../config/AppColor";
import AppText from "../components/AppText";

function DetailScreen({ navigation, route }) {
  const { product } = route.params;
  return (
    <AppScreen style={styles.container}>
      <View style={{ alignItems: "center", flex: 1 }}>
        {product.title && (
          <>
            {isFinite(product.image) ? (
              <Image source={product.image} style={styles.image} />
            ) : (
              <Image source={{ uri: product.image }} style={styles.image} />
            )}
            <View style={{ alignItems: "center" }}>
              <AppText style={styles.title}>{product.title}</AppText>
              <AppText style={styles.subtitle}>{product.subtitle}</AppText>
              <AppText>{product.content}</AppText>
            </View>
          </>
        )}
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.otherColor,
    flex: 1,
    marginTop: 0,
  },
  image: {
    width: "90%",
    height: "27%",
    borderRadius: 25,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    padding: 5,
  },
  subtitle: {
    fontSize: 13,
    padding: 5,
  },
});

export default DetailScreen;
