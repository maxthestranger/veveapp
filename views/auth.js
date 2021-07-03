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
import Input from "../components/input";

const Auth = ({navigation}) => {
  return (
    <SafeAreaView style={StyleSheet.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{paddingTop: 80, paddingBottom: 20 }}>
            <TextInfo value="Login Account" fs="large" align="left" />
            <View style={{paddingVertical: 5}} />
            <TextInfo value="Hello, Welcome to the app" fs="small" align="left" />
        </View>
        <View style={{paddingVertical: 32}}>
            <TextInfo value="Phone Number" fs="mid" align="left" />
            <View style={{paddingVertical: 5}} />
            <Input keyboardType="number-pad" placeholder="0792922304" maxLength={12} />
        </View>
        <Button value="Request OTP" theme="primary" onPress={() => navigation.navigate('otp')} />
        <View style={{paddingVertical: 10}} />
        <TextInfo value="By logging in, you are agreeing to the Terms of Service. And that you are 18+" fs="small" align="center" />
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
  text: {
    fontSize: 42,
  },
});

export default Auth;
