import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import profile from "../assets/icon/profile.png";
import house from "../assets/icon/house.png";
import basket from "../assets/icon/basket.png";
import heart from "../assets/icon/heart.png";

const Nav = () => (
  <View style={styles.nav}>
    <TouchableOpacity style={styles.menuBar}>
      <Image source={house} style={styles.img} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.menuBar}>
      <Image source={basket} style={styles.img} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.menuBar}>
      <Image source={heart} style={styles.img} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.menuBar}>
      <Image source={profile} style={styles.img} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  nav: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#F8F8F8",
    borderRadius: 10,
    paddingVertical: 15,
  },
  img: {
    width: 24,
    height: 24,
  },
});

export default Nav;
