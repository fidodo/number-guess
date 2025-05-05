import { View, Text, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
function StartGameScreen() {
  return (
    <View style={styles.inputcontainer}>
      <TextInput
        style={styles.numberinput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton text="Reset" onClick={() => {}} />
      <PrimaryButton text="Confirm" onClick={() => {}} />
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputcontainer: {
    padding: 16,
    marginTop: 100,
    backgroundColor: "#72063c",
    borderRadius: 8,
    marginHorizontal: 24,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberinput: {
    height: 70,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    fontSize: 32,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
