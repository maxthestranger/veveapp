import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Image,
} from 'react-native';
import Constants from 'expo-constants';

import TextInfo from '../components/textInfo';
import Button from '../components/button';
import VerifCode from '../components/verifCode';
import MenuTitle from '../components/menuTitle';

import otp from '../assets/images/otp.png';

const Otp = ({ navigation }) => {
  return (
    <SafeAreaView style={StyleSheet.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      >
        <View style={{ paddingTop: 40, paddingBottom: 30 }}>
          <View
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              paddingTop: 30,
            }}
          >
            <Image source={otp} style={{ width: 200, height: 180 }} />
          </View>
        </View>
        <TextInfo value="Verification code" fs="medium" align="center" />
        <View style={{ paddingVertical: 10 }} />
        <TextInfo
          value="We have the code verification to your mobile number"
          fs="small"
          align="center"
        />
        <View style={{ paddingVertical: 5 }} />
        <TextInfo value="+254792922304" fs="mid" align="center" />
        <View style={{ paddingVertical: 30 }}>
          <VerifCode />
          <View style={{ paddingVertical: 20 }} />
          <Button
            value="Submit"
            theme="primary"
            onPress={() => navigation.navigate('home')}
          />
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
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    minHeight: '100%',
    display: 'flex',
  },
  text: {
    fontSize: 42,
  },
});

export default Otp;
