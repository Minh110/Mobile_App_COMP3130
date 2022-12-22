import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppTab = createBottomTabNavigator();

import AppColor from "../config/AppColor";
import AppIcon from "../components/AppIcon";
import HomeNavigator from "./HomeNavigator";

const TabNavigator = () => (
  <AppTab.Navigator
    tabBarOptions={{
      activeTintColor: AppColor.otherColor,
      activeBackgroundColor: AppColor.primaryColor,
    }}
  >
    <AppTab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: () => (
          <AppIcon
            size={30}
            name="home"
            backgroundColor={AppColor.otherColor}
          />
        ),
      }}
    />
  </AppTab.Navigator>
);
/*<AppTab.Screen
name="MyBooks"
component={MyBooksScreen}
options={{
  tabBarIcon: () => (
    <AppIcon
      size={30}
      name="book-open-variant"
      backgroundColor={AppColor.otherColor}
    />
  ),
}}
/>*/
export default TabNavigator;
