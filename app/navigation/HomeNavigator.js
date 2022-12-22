import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import HomeScreen from "../screens/HomeScreen";
import MyMemScreen from "../screens/MyMemScreen";
import DetailScreen from "../screens/DetailScreen";
import NewMemScreen from "../screens/NewMemScreen";

const HomeNavigator = () => (
  <AppStack.Navigator mode="modal">
    <AppStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen name="Memories" component={MyMemScreen} />
    <AppStack.Screen name="New Memories" component={NewMemScreen} />
    <AppStack.Screen name="Detail" component={DetailScreen} />
  </AppStack.Navigator>
);

export default HomeNavigator;
