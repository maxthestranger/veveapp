import React from "react";
import { StyleSheet, Text } from "react-native";

const TextInfo = ({ value, fs, align }) => (
  <Text style={[styles[fs], styles[align]]}>{value}</Text>
);

const styles = StyleSheet.create({
  large: {
    color: "#364A63",
    fontSize: 32,
    fontWeight: 'bold',
  },
  medium: {
    color: "#364A63",
    fontSize: 27,
    fontWeight: 'bold',
  },
  small: {
    fontSize: 16,
    color: "#8094AE",
    fontWeight: 'normal',
  },
  center: {
    textAlign: "center",
  },
  left: {
    textAlign: "left",
  },
});

export default TextInfo;
