import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import AppScreen from "../components/AppScreen";
import AppColor from "../config/AppColor";
import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import DataManager from "../config/DataManager";
import * as ImagePicker from "expo-image-picker";
import AppIcon from "../components/AppIcon";

const categories = [
  {
    label: "Adventure",
    value: 1,
    icon: "airplane-takeoff",
    backgroundColor: "red",
  },
  { label: "Event", value: 2, icon: "gift", backgroundColor: "blue" },
  {
    label: "Others",
    value: 3,
    icon: "nintendo-game-boy",
    backgroundColor: "green",
  },
];

function NewBookScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const [titleError, setTitleError] = useState("");
  const [subTitleError, setSubTitleError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [imageError, setImageError] = useState("");

  let openImagePickerAsync = async () => {
    //For uploading the pictures
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }
    setImage({ path: pickerResult.uri });
  };

  const doErrorCheck = () => {
    //checking error for the inputs before submit
    setTitleError(title.length > 0 ? "" : "Please set a valid book Title");
    setSubTitleError(
      subTitle.length > 0 ? "" : "Please set a valid book Subtitle"
    );
    setCategoryError(category ? "" : "Please set a valid Category");
    setImageError(image ? "" : "Please pick an image");
    return title.length > 0 && subTitle.length > 0 && category && image
      ? true
      : false;
  };

  const addMem = () => {
    //adding new memories to data manager
    let commonData = DataManager.getInstance();
    let user = commonData.getUserID();

    const mems = commonData.getMems(user);
    const memID = mems.length + 1;
    const newMem = {
      title: title,
      subtitle: subTitle,
      category: category.label,
      memid: memID,
      userid: user,
      image: image.path,
      content: content,
    };
    commonData.addMems(newMem);
  };

  return (
    <KeyboardAwareScrollView>
      <AppScreen style={{ backgroundColor: AppColor.otherColor }}>
        <AppTextInput //title input
          icon="rename-box"
          placeholder="Title"
          value={title}
          onChangeText={(inputText) => setTitle(inputText)}
        />
        {titleError.length > 0 ? (
          <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
            {titleError}
          </AppText>
        ) : (
          <></>
        )}

        <AppTextInput //date input
          icon="calendar-month"
          placeholder="Date"
          value={subTitle}
          onChangeText={(inputText) => setSubTitle(inputText)}
        />
        {subTitleError.length > 0 ? (
          <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
            {subTitleError}
          </AppText>
        ) : (
          <></>
        )}

        <AppTextInput //adding details
          icon="fountain-pen-tip"
          placeholder="Details"
          value={content}
          onChangeText={(inputText) => setContent(inputText)}
        />

        <AppPicker //categories of the memory
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
          data={categories}
          icon="select-group"
          placeholder="Categories"
          numColumns={3}
        />
        {categoryError.length > 0 ? (
          <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
            {categoryError}
          </AppText>
        ) : (
          <></>
        )}

        <TouchableOpacity
          style={styles.imageButton}
          onPress={openImagePickerAsync}
        >
          <AppIcon //uploading pictures
            name="camera"
            size={80}
            iconColor={AppColor.otherColor}
            backgroundColor={AppColor.primaryColor}
          />
          {image && (
            <Image
              source={{ uri: image.path }}
              style={{ height: 80, width: 80, marginLeft: 20 }}
            />
          )}
        </TouchableOpacity>
        {imageError.length > 0 ? (
          <AppText style={{ margin: 5, color: "red", fontSize: 16 }}>
            {imageError}
          </AppText>
        ) : (
          <></>
        )}

        <AppButton
          title="Add Memory"
          onPress={() => {
            if (doErrorCheck()) {
              addMem();
              navigation.navigate("Memories");
            }
          }}
        />
      </AppScreen>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  imageButton: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default NewBookScreen;
