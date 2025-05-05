import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
function GameOverScreen({ score, onRestart }) {
  return (
    <View>
      <Text>Game Over!</Text>
      <Text>Score: {score}</Text>
      <Button title="Restart" onPress={onRestart} />
    </View>
  );
}

export default GameOverScreen;
