import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppScreen from "../components/AppScreen";
import AppColor from "../config/AppColor";
import AppListItem from "../components/AppListItem";
import AppIcon from "../components/AppIcon";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function HomeScreen({ navigation, route }) {
  //console.log(route.params.message);
  /*<View style={styles.welcomeContainer}>
        <MaterialCommunityIcons
          name="library"
          size={60}
          color={AppColor.primaryColor}
        />
    </View>*/
  return (
    <AppScreen style={styles.container}>
      <View>
        <AppText style={styles.welcomeContainer}>Welcome back!</AppText>
      </View>

      <View style={styles.profileContainer}>
        <AppListItem
          image={route.params.paramsImage}
          title={route.params.paramsName}
          subtitle={route.params.paramsEmail}
        />
      </View>

      <View style={styles.linkContainer}>
        <AppListItem
          title="My Memories"
          IconComponent={
            <AppIcon
              name="book-open-variant"
              size={40}
              iconColor={AppColor.otherColor}
              backgroundColor={AppColor.primaryColor}
            />
          }
          onPress={() => navigation.navigate("Memories")}
        />
      </View>

      <View>
        <AppButton
          title="Log Out"
          onPress={() =>
            Alert.alert("Are you sure?", "More memories can be made", [
              {
                text: "Yes",
                onPress: () => navigation.navigate("Welcome"),
              },
              {
                text: "No",
                onPress: () => console.log("Eyyyy"),
                style: "cancel",
              },
            ])
          }
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColor.otherColor,
  },
  welcomeContainer: {
    justifyContent: "center",
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
  },
  profileContainer: {
    marginTop: 50,
    backgroundColor: AppColor.otherColorLite,
    height: 90,
    justifyContent: "center",
    borderRadius: 25,
  },
  linkContainer: {
    marginVertical: 75,
    backgroundColor: AppColor.otherColorLite,
    height: 150,
    justifyContent: "space-around",
    paddingLeft: 10,
  },
});

/*
<AppIcon
  name="book-open-variant"
  size={40}
  iconColor="black"
  backgroundColor="white"
/> 
*/

export default HomeScreen;
