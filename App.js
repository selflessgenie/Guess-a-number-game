import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./components/screens/StartGameScreen";
import GameScreen from "./components/screens/GameScreen";
import GameOverScreen from "./components/screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [attemptCount, setAttemptCount] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const attemptCountHandler = (attemptCount) => {
    setAttemptCount(attemptCount);
    console.log(attemptCount);
  };

  let content = <StartGameScreen startGameHandler={startGameHandler} />;

  if (userNumber && attemptCount <= 0) {
    content = (
      <GameScreen
        selectedValue={userNumber}
        attemptCountHandler={attemptCountHandler}
      />
    );
  } else if (attemptCount > 0) {
    content = (
      <GameOverScreen
        selectedValue={userNumber}
        startGameHandler={startGameHandler}
        attemptCountHandler={attemptCountHandler}
        attemptCount={attemptCount}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
