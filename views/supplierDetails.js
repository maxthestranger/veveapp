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
import ProdCard from '../components/prodCard';
import Nav from '../components/nav';

import { suppliers } from '../modules/dummyData';
import prof from '../assets/images/prof.jpg';

const SupplierDetails = ({ navigation }) => {
  return (
    <SafeAreaView style={StyleSheet.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{ paddingVertical: 20 }} />
        <MenuTitle value="Supplier" onPress={() => navigation.goBack()} />
        <SecTitle value={suppliers[0].name} />
        <TextInfo value={suppliers[0].location} fs="small" align="left" />
        <View style={{ borderRadius: 13, paddingTop: 10 }}>
          <Image
            source={prof}
            style={{ width: 350, height: 120, borderRadius: 13 }}
          />
        </View>
        <SecTitle value="Products" />
        <View style={styles.grid}>
          <ProdCard />
          <ProdCard />
          <ProdCard />
          <ProdCard />
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
    marginBottom: 50,
  },
});

export default SupplierDetails;
