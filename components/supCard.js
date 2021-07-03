import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";

const SupCard = ({ name, location, imgUrl, deliveryTime, distance, verified, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={{width: '60%'}}>
        <Text style={{color: '#364A63', fontWeight: 'bold', fontSize: 16,}}>{name}</Text>
        <Text style={{color: '#8094AE', paddingVertical: 2, maxWidth: '80%'}}>{location}</Text>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start',}}>
            <Text style={{color: '#8094AE', paddingVertical: 2,}}>{deliveryTime} min</Text>
            <Text style={{color: '#8094AE', paddingVertical: 2, paddingHorizontal: 10}}>{distance} km</Text>
        </View>
    </View>
    <View style={{width: '40%'}}>
        <Image source={imgUrl} style={{width: 100, height: 100, borderRadius: 13}} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 13,
    marginVertical: 7,
    borderBottomColor: '#EAEAF3',
    borderBottomWidth: 1,
    paddingVertical: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
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

export default SupCard;
