import React from "react";
import { StyleSheet, Image, View, TouchableOpacity, Text } from "react-native";
import asli from '../assets/images/asli.png';

const ProdDetailCard = () => (
  <View style={styles.card}>
      <View style={{marginBottom: 10}}>
        <Image source={asli} style={{width: 100, height: 100, borderRadius: 6}} />
      </View>
      <View>
        <Text style={{paddingVertical: 5, color: '#364A63', fontSize: 16, fontWeight: 'bold',}}>Asli</Text>
        <Text style={{paddingVertical: 5, color: '#364A63', fontSize: 16}}>John wa Mwage</Text>
        <Text style={{paddingVertical: 5, color: '#364A63', fontSize: 16}}>Opposite Matter - South B</Text>
        <Text style={{color: '#2F2E41', fontSize: 16, fontWeight: 'bold'}}>Ksh. 100.00</Text>
        <Text style={{paddingVertical: 10, color: '#2B4E62'}}>quantity</Text>
        <TouchableOpacity style={{backgroundColor: '#2B4E62', borderRadius: 9, paddingVertical: 12}}>
            <Text style={{textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 13,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(54, 74, 99, 0.09)',
    padding: 16,
    marginVertical: 7,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});

export default ProdDetailCard;
