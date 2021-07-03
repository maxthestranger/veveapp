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
import Button from "../components/button";


import congrats from '../assets/images/congrats.png';

const Success = ({navigation}) => {
  return (
    <SafeAreaView style={StyleSheet.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={congrats} style={{width: 230, height: 194}} />
        <TextInfo value="Your Order has been accepted" fs="medium" align="center" />
        <TextInfo value="Your items has been placed and is on its way to being processed" fs="small" align="center" />
        <View>
            <Button value="Track Order" theme="primary" onPress={() => navigation.naviagate('tracking')} />
            <Button value="Back to Home" theme="secondary" onPress={() => navigation.naviagate('home')} />
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
  },
});

export default Success;
