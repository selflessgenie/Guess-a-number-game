import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "./constants/colors";

const Input = (props) => {
  return (
    <TextInput {...props} style={{ ...styles.inputBox, ...props.style }} />
  );
};

const styles = StyleSheet.create({
  inputBox: {
    height: 40,
    borderBottomWidth: 2,
    borderColor: Colors.borderColor,
    marginTop: 35,
  },
});

export default Input;
