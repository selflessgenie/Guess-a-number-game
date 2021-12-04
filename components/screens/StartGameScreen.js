import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../Card";
import Colors from "../constants/colors";
import Input from "../Input";
import NumberContainer from "../NumberContainer";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetButtonHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmButtonHandler = () => {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Please enter a number between 1-99", [
        { text: "Okay", style: "destructive", onPress: resetButtonHandler },
      ]);
      return;
    }

    setConfirmed(true);
    setSelectedValue(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let selectedValueView;

  if (confirmed) {
    selectedValueView = (
      <TouchableNativeFeedback onPress={() => {}}>
        <View style={styles.selectedValueView}>
          <Text style={styles.selectedValueText}>You've selected</Text>
          <NumberContainer>{selectedValue}</NumberContainer>
          <Text style={{ marginVertical: 5 }}>Tap to start the Game</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.selectNumberContainer}>
          <Text>Select a Number</Text>
          <Input
            keyboardType="number-pad"
            maxLength={2}
            style={styles.inputBox}
            blurOnSumbit
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetButtonHandler}
                color={Colors.secondary}
              />
            </View>

            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmButtonHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {selectedValueView}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  selectNumberContainer: {
    marginTop: 10,
    width: 300,
    maxWidth: "80%",
    height: 200,
    alignItems: "center",
    padding: 15,
  },
  inputBox: {
    width: "30%",
    fontSize: 30,
    textAlign: "center",
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
  button: {
    width: 100,
  },
  selectedValueView: {
    borderWidth: 2,
    borderRadius: 5,
    marginVertical: 40,
    borderColor: "transparent",
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    justifyContent: "center",
    height: 150,
    elevation: 5,
    backgroundColor: "white",
    shadowColor: Colors.positiveShadow,
  },
  selectedValueText: {
    fontSize: 20,
    color: Colors.positiveText,
    marginVertical: 5,
  },
});

export default StartGameScreen;
