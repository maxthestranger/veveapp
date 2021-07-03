import React from "react";
import { StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import arrowRight from '../assets/icon/arrow_right.png';

const ButtonRound = ({onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Image source={arrowRight} style={{height: 20, width: 26}} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 60,
    backgroundColor: '#2B4E62',
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonRound;
