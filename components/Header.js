import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "./constants/colors";

const header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 39,
    backgroundColor: Colors.primary,
  },
  headerTitle: {
    fontSize: 25,
    color: "white",
    textTransform: "uppercase",
    flex: 1,
  },
});

export default header;
