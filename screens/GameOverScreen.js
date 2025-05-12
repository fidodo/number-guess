import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
function GameOverScreen({ score, onRestart }) {
  return (
    <View style={styles.container}>
      <Text>Game Over!</Text>
      <Text>Score: {score}</Text>
      <Button title="Restart" onPress={onRestart} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
