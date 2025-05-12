import React from "react";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.inputcontainer}>{children}</View>;
}

import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  inputcontainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    marginHorizontal: 24,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
export default Card;
