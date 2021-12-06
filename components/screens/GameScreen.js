import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../Card";
import NumberContainer from "../NumberContainer";

const RandomNumberGenerator = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const randNum = Math.floor(Math.random() * (max - min)) + min;
  if (randNum === exclude) {
    return RandomNumberGenerator(min, max, exclude);
  } else {
    return randNum;
  }
};

const GameScreen = (props) => {
  const [randomNumber, setRandomNumber] = useState(
    RandomNumberGenerator(1, 100, props.selectedValue)
  );

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <View style={styles.textContainer}>
          <Text>Computer's guess</Text>
          <NumberContainer>{randomNumber}</NumberContainer>
        </View>
        <View>
          <Button title="Lower" />
          <Button title="Higher" />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    paddingVertical: 30,

    width: "80%",
    marginVertical: 60,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
});

export default GameScreen;
