import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ value, theme, onPress }) => (
  <TouchableOpacity style={[styles.button, styles[theme]]} onPress={onPress}>
    <Text
      style={{
        fontWeight: "bold",
        color: theme === "primary" ? "#fff" : "#2B4E62", fontSize: 16,
      }}
    >
      {value}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 25,
    fontWeight: "bold",
  },
  primary: {
    backgroundColor: "#2B4E62",
  },
  secondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#2B4E62",
  },
});

export default Button;
