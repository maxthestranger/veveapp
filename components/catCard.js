import React from "react";
import { StyleSheet, ImageBackground, View, TouchableOpacity, Text } from "react-native";

const CatCard = ({ name, img, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <ImageBackground source={img} style={styles.bgImg}>
      <View style={styles.bgText}>
        <Text style={styles.text}>{name}</Text>
      </View>
      </ImageBackground>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 13,
    position: 'relative',
    width: 90,
    height: 93,
    marginVertical: 7,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bgImg: {
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 13,
  },
  bgText: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
  }
});

export default CatCard;
