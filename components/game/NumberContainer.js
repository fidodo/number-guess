import { View, Text } from "react-native";
function NumberContainer({ children }) {
  return (
    <View
      style={{
        borderWidth: 4,
        borderColor: "white",
        padding: 24,
        borderRadius: 8,
        marginTop: 24,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 36, color: "white", fontWeight: "bold" }}>
        {children}
      </Text>
    </View>
  );
}

export default NumberContainer;
