import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import Constants from "expo-constants";

import TextInfo from "../components/textInfo";
import Button from "../components/button";
import Input from "../components/input";
import ButtonRounded from "../components/buttonRound";
import Search from '../components/search';
import SecTitle from "../components/secTitle";
import CatCard from "../components/catCard";
import Nav from "../components/nav";

import { products } from "../modules/dummyData";
import plus from '../assets/images/plus.png';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={StyleSheet.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{paddingVertical: 20}} />
        <Search />
        <SecTitle value="Categories" />
        <View style={styles.grid}>
          {
            products.map((product, index) => (
              <CatCard key={index} name={product.name} img={product.imgUrl} />
            ))
          }
        </View>
        <SecTitle value="Favourite Suppliers" />
        <View style={styles.fav}>
           <TouchableOpacity style={styles.addFav}>
              <Image source={plus} style={{width: 34, height: 34}} />
           </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{position: 'absolute', left: 0, bottom: 0, width: '100%',}}>
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
    backgroundColor: "#fff",
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
  }
});

export default Home;
