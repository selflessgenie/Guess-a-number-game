import React from "react";
import { StyleSheet, View, Text, TouchableNativeFeedback } from "react-native";
import Card from "../Card";
import colors from "../constants/colors";
import NumberContainer from "../NumberContainer";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.numberContainer}>
        <Text
          style={{
            ...styles.textContainer,
            fontSize: 20,
            color: colors.secondary,
          }}
        >
          Computer's guess :{" "}
        </Text>
        <NumberContainer>
          <Text>{props.selectedValue}</Text>
        </NumberContainer>
      </View>
      <Card style={styles.card}>
        <Text style={styles.textContainer}>It took computer</Text>
        <NumberContainer>
          <Text>{props.attemptCount}</Text>
        </NumberContainer>
        <Text style={styles.textContainer}>attempts to guess the number!</Text>
        <TouchableNativeFeedback
          onPress={() => {
            props.startGameHandler(null);
            props.attemptCountHandler(0);
          }}
        >
          <View>
            <Text
              style={{
                ...styles.textContainer,
                color: colors.secondary,
                fontWeight: "bold",
                borderWidth: 2,
                borderRadius: 10,
                padding: 10,
                borderColor: colors.inputBorder,
              }}
            >
              Tap to close
            </Text>
          </View>
        </TouchableNativeFeedback>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  card: {
    marginVertical: 30,
    marginHorizontal: 30,
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 400,
  },
  textContainer: {
    color: colors.positiveText,
    fontSize: 30,
    textAlign: "center",
    textTransform: "uppercase",
  },
  numberContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});

export default GameOverScreen;
