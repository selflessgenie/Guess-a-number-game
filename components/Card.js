import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    elevation: 10,
    shadowColor: "black",
    backgroundColor: "white",
    padding: 10,
  },
});

export default Card;
