import React, { useState } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";

import AppScreen from "../components/AppScreen";
import AppColor from "../config/AppColor";
import AppCard from "../components/AppCard";
import DataManager from "../config/DataManager";
import AppIcon from "../components/AppIcon";
import AppButton from "../components/AppButton";

function MyMemScreen({ navigation }) {
  const getUserMems = () => {
    //retrieving the memormy list function
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    return commonData.getMems(user);
  };

  let memList = getUserMems(); //get the initial memory list

  const [curMems, setDelMems] = useState(memList); //used for deleting entries
  const [refreshing, setRefreshing] = useState(false); //used for refreshing

  const handleDel = (mem1) => {
    //pass the deleting entries function to the data manager
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();
    memList = commonData.handleDelete(mem1, user);
    setDelMems(memList);
  };

  return (
    <AppScreen style={styles.container}>
      <FlatList
        data={curMems}
        keyExtractor={(mem) => mem.memid.toString()}
        refreshing={refreshing}
        onRefresh={() => setDelMems(memList)}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            category={item.category}
            onPress={() => {
              navigation.navigate("Detail", { product: item });
            }}
            onSwipeLeft={() => (
              // making the delete button with swipe
              <View style={styles.deleteView}>
                <TouchableOpacity onPress={() => handleDel(item)}>
                  <AppIcon
                    name="trash-can"
                    iconColor={AppColor.otherColor}
                    backgroundColor={AppColor.primaryColor}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      />
      <AppButton //adding new memories button
        style={{ paddingBottom: 10 }}
        color="secondaryColor"
        title={"New Memories"}
        onPress={() => navigation.navigate("New Memories")}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColor.otherColor,
    flex: 1,
    marginTop: 0,
  },
  deleteView: {
    backgroundColor: AppColor.secondaryColor,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MyMemScreen;
