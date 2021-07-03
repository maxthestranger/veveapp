import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import arrowLeft from "../assets/icon/arrow_left.png";

const MenuTitle = ({ value, onPress }) => (
  <View style={styles.menu}>
    <TouchableOpacity onPress={onPress} style={styles.back}>
      <Image source={arrowLeft} style={{ width: 15, height: 15 }} on />
    </TouchableOpacity>
    <Text style={styles.title}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  menu: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  title: {
    color: "#364A63",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
  },
  back: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 10,
  }
});

export default MenuTitle;
