import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../Card";
import NumberContainer from "../NumberContainer";
import Colors from "../constants/colors";

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

  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const attemptCount = useRef(0);

  useEffect(() => {
    if (randomNumber === props.selectedValue) {
      props.attemptCountHandler(attemptCount.current);
    }
  });

  const nextRandomNumber = (direction) => {
    if (
      (direction === "lower" && randomNumber < props.selectedValue) ||
      (direction === "higher" && randomNumber > props.selectedValue)
    ) {
      Alert.alert("That's a lie!", "You know this is a wrong hint...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = randomNumber;
    } else {
      currentLow.current = randomNumber;
    }

    const nextNum = RandomNumberGenerator(
      currentLow.current,
      currentHigh.current,
      randomNumber
    );

    attemptCount.current = attemptCount.current + 1;
    setRandomNumber(nextNum);
  };

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.cardIntro}>Computer's guess</Text>
          <NumberContainer>{randomNumber}</NumberContainer>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.info}>
            Give hints to computer by pressing either of below two buttons
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Lower"
              onPress={nextRandomNumber.bind(this, "lower")}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Higher"
              onPress={nextRandomNumber.bind(this, "higher")}
            />
          </View>
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
  cardIntro: {
    fontSize: 20,
    marginVertical: 20,
    color: Colors.secondary,
    fontWeight: "bold",
  },
  infoContainer: {
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "center",
    height: 100,
  },
  info: {
    textAlign: "center",
    fontSize: 20,
    color: Colors.positiveText,
    fontWeight: "bold",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 80,
    width: "100%",
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default GameScreen;
