import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Image,
} from "react-native";
import Constants from "expo-constants";

import TextInfo from "../components/textInfo";
import ButtonRounded from "../components/buttonRound";

import moreinfo from '../assets/images/moreinfo.png';

const MoreInfo = ({navigation}) => {
  return (
    <SafeAreaView style={StyleSheet.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-start'}}>
     <View style={{width: '100%', marginBottom: 50}}>
      <Image source={moreinfo} style={{width: 350, height: 420}} />
     </View>
      <TextInfo value="On-demand Veve Delivery Solution" fs="large" align="left" />
      <View style={{paddingVertical: 10}} />
      <TextInfo value="Recommended features for the assignment of orders to trucks and drivers available nearby" fs="small" align="left" />
      <View style={{display: 'flex', alignItems: 'flex-end', paddingVertical: 30}}>
        <ButtonRounded onPress={() => navigation.navigate('home')} />
      </View>
      </ScrollView>
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
    display: 'flex',
  },
  text: {
    fontSize: 42,
  },
});

export default MoreInfo;
