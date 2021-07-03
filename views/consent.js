import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  BackHandler,
} from "react-native";
import Constants from "expo-constants";

import TextInfo from "../components/textInfo";
import Button from "../components/button";
import logo from "../assets/images/veve.png";

const Consent = ({ navigation }) => {
  const exitApp = () => {
    BackHandler.exitApp();
  };

  const navAuth = () => navigation.navigate("auth");
  return (
    <SafeAreaView style={StyleSheet.container}>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            width: "100%",
            paddingTop: 87,
            paddingBottom: 60,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image source={logo} style={{ width: 218, height: 67 }} />
        </View>
        <TextInfo
          value="This app is only for persons over the age of 18"
          fs="medium"
          align="center"
        />
        <View style={{ paddingVertical: 10 }} />
        <TextInfo
          value="This app is an e-comerce store for alcohol products and is not suitable for persons under the age of 18."
          fs="small"
          align="center"
        />
        <View style={{ paddingVertical: 30 }}>
          <Button value="I am Over 18" theme="primary" onPress={navAuth} />
          <View style={{ paddingVertical: 14 }} />
          <Button value="I am Under 18" theme="secondary" onPress={exitApp} />
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
  },
  text: {
    fontSize: 42,
  },
});

export default Consent;
