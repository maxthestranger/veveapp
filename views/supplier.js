import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Constants from 'expo-constants';

import TextInfo from '../components/textInfo';
import Button from '../components/button';
import Input from '../components/input';
import MenuTitle from '../components/menuTitle';
import Search from '../components/search';
import SecTitle from '../components/secTitle';
import SupCard from '../components/supCard';
import Nav from '../components/nav';

import { suppliers } from '../modules/dummyData';
import plus from '../assets/images/plus.png';

const Supplier = ({ navigation }) => {
  return (
    <SafeAreaView style={StyleSheet.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ paddingVertical: 20 }} />
        <MenuTitle value="Suppliers" onPress={() => navigation.goBack()} />
        <Search />
        <View style={styles.grid}>
          {suppliers.map((supplier, index) => (
            <SupCard
              key={index}
              name={supplier.name}
              location={supplier.location}
              imgUrl={supplier.imgUrl}
              deliveryTime={supplier.deliveryTime}
              distance={supplier.distance}
              verified={supplier.verified}
              onPress={() => navigation.navigate('supplierDetails')}
            />
          ))}
        </View>
      </ScrollView>
      <View style={{ position: 'absolute', left: 0, bottom: 0, width: '100%' }}>
        <Nav />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    minHeight: '100%',
  },
  text: {
    fontSize: 42,
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  fav: {},
  addFav: {
    height: 86,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#364A63',
    width: '30%',
    borderRadius: 13,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Supplier;
