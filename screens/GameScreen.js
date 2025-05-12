import { View, Text, StyleSheet, Alert } from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import { useState, useEffect, useMemo } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function generateRandomBetween(min, max, exclude) {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNumber;
  }
}

let min = 1;
let max = 100;

function GameScreen({ userChoice, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver();
    }
  }, [currentGuess, userChoice, onGameOver]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "higher" && currentGuess > userChoice)
    ) {
      Alert.alert("Please guess a number in the range!", "Don't lie!", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      max = currentGuess;
    } else {
      min = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(min, max, currentGuess);
    setCurrentGuess(nextNumber);
  }
  return (
    <View style={styles.container}>
      <Title>Player's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={{ marginBottom: 12 }}>
          Higher or Lower?
        </InstructionText>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flex: 1 }}>
            <PrimaryButton
              text="Higher"
              onClick={nextGuessHandler.bind(this, "higher")}
            />
          </View>
          <View style={{ flex: 1 }}>
            <PrimaryButton
              text="Lower"
              onClick={nextGuessHandler.bind(this, "lower")}
            />
          </View>
        </View>
        <View>
          <Text>Log rounds</Text>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 100,
  },
});

export default GameScreen;
