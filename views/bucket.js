import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text
} from "react-native";
import Constants from "expo-constants";

import TextInfo from "../components/textInfo";
import Button from "../components/button";
import Input from "../components/input";
import MenuTitle from "../components/menuTitle";
import Search from '../components/search';
import SecTitle from "../components/secTitle";
import Nav from "../components/nav";

import { suppliers } from "../modules/dummyData";
import prof from '../assets/images/prof.jpg';

const Bucket = ({navigation}) => {
  return (
    <SafeAreaView style={StyleSheet.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{paddingVertical: 20}} />
        <MenuTitle value="Alsi" onPress={() => navigation.goBack()} />
        <View style={styles.grid}>
            <Text>Under Development</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    height: 300
  },
});

export default Bucket;