import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from "react-native";
import Constants from "expo-constants";

import Button from "../components/button";
import MenuTitle from "../components/menuTitle";

const Tracking = ({navigation}) => {
  return (
    <SafeAreaView style={StyleSheet.container}>
      <ScrollView style={styles.scrollView}>
          <MenuTitle value="Tracking" onPress={() => navigation.goBack()} />
            <Text>Coming Soon</Text>
        <View>
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

export default Tracking;
