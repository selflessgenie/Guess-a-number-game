import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Colors from "./constants/colors";
const NumberContainer = (props) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    width: "30%",
    borderWidth: 10,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.primary,
  },
  text: {
    fontSize: 50,
    color: Colors.primary,
  },
});

export default NumberContainer;
