import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";
import { StyleSheet } from "react-native";

import AppText from "./components/AppText";
import LoginScreen from "./screens/LoginScreen";
import AppButton from "./components/AppButton";
import AppColor from "./config/AppColor";

test("AppText can render with correct form", () => {
  const json = renderer
    .create(<AppText>There is something in here</AppText>)
    .toJSON();
  expect(json.props.style[0].fontSize).toBe(20);
  expect(json.props.style[0].fontFamily).toBe("Avenir-Roman");
  expect(json.children.includes("Something"));
});

describe("Login Screen", () => {
  it("should have Email Address and Password input bar", async () => {
    const { getByPlaceholderText, getByText, getByTitle } = render(
      <LoginScreen />
    );
    const emailAddress = getByPlaceholderText("Email Address");
    const password = getByPlaceholderText("Password");
    expect(emailAddress).toBeDefined();
    expect(password).toBeDefined();
  });
});

test("AppButton can render with default form, without all of the input", () => {
  const json = renderer.create(<AppButton title="Something else" />).toJSON();
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
  expect(json).toBeDefined();
  expect(json.children[0].props.style[0]).toStrictEqual(styles.button);
});
